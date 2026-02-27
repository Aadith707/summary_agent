import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'
import client from '../api/client'
import { User, TokenResponse, LoginRequest, RegisterRequest } from '../types/auth'

interface AuthContextType {
  user: User | null
  token: string | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (credentials: LoginRequest) => Promise<void>
  register: (data: RegisterRequest) => Promise<void>
  logout: () => void
  error: string | null
  clearError: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Load auth data from localStorage on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('access_token')
    const savedUser = localStorage.getItem('user')
    if (savedToken && savedUser) {
      setToken(savedToken)
      setUser(JSON.parse(savedUser))
    }
  }, [])

  const login = useCallback(async (credentials: LoginRequest) => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await client.post<TokenResponse>('/api/auth/login', credentials)
      const { access_token, user: userData } = response.data
      
      setToken(access_token)
      setUser(userData)
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('user', JSON.stringify(userData))
    } catch (err: any) {
      const message = err.response?.data?.detail || 'Login failed'
      setError(message)
      throw new Error(message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const register = useCallback(async (data: RegisterRequest) => {
    setIsLoading(true)
    setError(null)
    try {
      // Only send email and password to backend
      const registerData = {
        email: data.email,
        password: data.password,
      }
      const response = await client.post<TokenResponse>('/api/auth/register', registerData)
      const { access_token, user: userData } = response.data
      
      setToken(access_token)
      setUser(userData)
      localStorage.setItem('access_token', access_token)
      localStorage.setItem('user', JSON.stringify(userData))
    } catch (err: any) {
      const message = err.response?.data?.detail || 'Registration failed'
      setError(message)
      throw new Error(message)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('access_token')
    localStorage.removeItem('user')
  }, [])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isAuthenticated: !!token,
        login,
        register,
        logout,
        error,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
