# Getting Started with Auth Application

## Quick Start

### Option 1: Automatic Setup (Windows)
```bash
setup.bat
```

### Option 2: Manual Setup

#### Backend Setup (Terminal 1)
```bash
cd backend
python -m venv venv
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
uvicorn main:app --reload
```

Backend will run on: `http://localhost:8000`

#### Frontend Setup (Terminal 2)
```bash
cd frontend
npm install
npm run dev
```

Frontend will run on: `http://localhost:3000`

## Testing the Application

1. Open `http://localhost:3000` in your browser
2. You should see the login page
3. Click "Sign up" to create a new account:
   - Enter any valid email (e.g., `test@example.com`)
   - Enter a password (minimum 8 characters)
   - Confirm password
   - Click "Sign Up"
4. After registration, you'll be logged in and redirected to home page
5. View your profile information
6. Click "Logout" to return to login page
7. Test login with your credentials from step 3

## API Documentation

Access the interactive API docs at: `http://localhost:8000/docs`

### Available Endpoints

**POST /api/auth/register**
- Create a new user account
- Body: `{ "email": "user@example.com", "password": "password123" }`
- Returns: JWT token and user info

**POST /api/auth/login**
- Login to existing account
- Body: `{ "email": "user@example.com", "password": "password123" }`
- Returns: JWT token and user info

**GET /api/auth/me**
- Get current user profile
- Requires: Authorization header with Bearer token
- Returns: User profile information

## Project Features

✅ User Registration with Email Validation
✅ Secure Login with JWT Tokens
✅ Password Hashing with bcrypt
✅ Protected Routes
✅ Beautiful UI with Animations
✅ Form Validation
✅ Error Handling
✅ Session Management
✅ Token Refresh in Requests
✅ Responsive Design

## Technology Stack

**Backend:**
- FastAPI - Modern Python web framework
- SQLAlchemy - ORM
- SQLite - Database
- JWT - Token authentication
- bcrypt - Password hashing

**Frontend:**
- React 18 - UI library
- TypeScript - Type safety
- React Router - Navigation
- Axios - HTTP client
- Vite - Build tool
- CSS3 - Styling with animations

## File Structure

```
summary_agent/
├── backend/
│   ├── main.py                 # FastAPI app
│   ├── database.py             # DB config
│   ├── models.py               # SQLAlchemy models
│   ├── schemas.py              # Pydantic schemas
│   ├── auth.py                 # Auth utilities
│   ├── routers/auth.py         # Auth routes
│   ├── requirements.txt         # Dependencies
│   └── test.db                 # SQLite DB
├── frontend/
│   ├── src/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── pages/              # Page components
│   │   ├── components/         # Reusable components
│   │   ├── context/            # Auth context
│   │   ├── api/                # API client
│   │   ├── types/              # TypeScript types
│   │   └── index.css           # Global styles
│   ├── package.json
│   ├── vite.config.ts
│   └── index.html
└── README.md
```

## Customization

### Change API Base URL
Edit `frontend/src/api/client.ts`:
```typescript
const API_BASE_URL = 'http://your-api-url:8000'
```

### Change Secret Key (Production)
Edit `backend/auth.py`:
```python
SECRET_KEY = "your-new-secret-key"
```

### Change Token Expiration
Edit `backend/auth.py`:
```python
ACCESS_TOKEN_EXPIRE_MINUTES = 60  # Change 30 to desired minutes
```

## Troubleshooting

**Backend won't start:**
- Ensure Python 3.8+ is installed
- Check that port 8000 is not in use
- Try: `pip install -r requirements.txt` again

**Frontend won't start:**
- Ensure Node.js 16+ is installed
- Delete `node_modules` and `npm install` again
- Check that port 3000 is not in use

**Login/Register failing:**
- Ensure backend is running on `http://localhost:8000`
- Check browser console for error messages
- Verify email format is valid

**Database issues:**
- Delete `backend/test.db` to reset
- Restart the backend server

## Production Deployment

For production deployment:

1. Change `SECRET_KEY` in `backend/auth.py`
2. Update CORS origins in `backend/main.py`
3. Use a production database (PostgreSQL recommended)
4. Set proper environment variables
5. Use HTTPS
6. Deploy backend and frontend to appropriate services

## Support

For issues or questions, check the code comments or review the architecture in the files mentioned above.
