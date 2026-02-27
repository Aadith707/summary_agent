export interface User {
  id: number
  email: string
  username: string
  full_name: string | null
  is_active: boolean
  is_verified: boolean
  created_at: string
  updated_at: string | null
}

export interface TokenResponse {
  access_token: string
  token_type: string
  user: User
}

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  email: string
  username: string
  password: string
  full_name?: string
}
