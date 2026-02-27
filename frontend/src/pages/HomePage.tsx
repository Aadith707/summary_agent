import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="home-container">
      <div className="navbar">
        <div className="navbar-content">
          <h2 className="navbar-title">Auth App</h2>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>

      <div className="home-content">
        <div className="welcome-card">
          <div className="welcome-icon">👋</div>
          <h1>Welcome, {user?.email}!</h1>
          <p>You have successfully logged in to your account.</p>
        </div>

        <div className="user-info-card">
          <h2>Your Profile</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Email</span>
              <span className="info-value">{user?.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Username</span>
              <span className="info-value">{user?.username}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Account Status</span>
              <span className="info-value">{user?.is_active ? 'Active' : 'Inactive'}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Member Since</span>
              <span className="info-value">
                {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
              </span>
            </div>
          </div>
        </div>

        <div className="features-card">
          <h2>Features</h2>
          <ul className="features-list">
            <li>✅ Secure authentication with JWT tokens</li>
            <li>✅ Password hashing with bcrypt</li>
            <li>✅ Session management</li>
            <li>✅ Email validation</li>
            <li>✅ Protected routes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage
