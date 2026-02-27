# Auth Application - Full Stack Setup

A complete authentication system with FastAPI backend and TypeScript React frontend.

## Project Structure

```
summary_agent/
├── backend/
│   ├── main.py              # FastAPI application
│   ├── database.py          # Database configuration
│   ├── models.py            # SQLAlchemy models
│   ├── schemas.py           # Pydantic schemas
│   ├── auth.py              # Authentication utilities
│   ├── routers/
│   │   └── auth.py          # Auth endpoints
│   ├── requirements.txt      # Python dependencies
│   └── test.db              # SQLite database (auto-created)
└── frontend/
    ├── src/
    │   ├── main.tsx         # React entry point
    │   ├── App.tsx          # Main app component
    │   ├── index.css        # Global styles
    │   ├── pages/
    │   │   ├── LoginPage.tsx
    │   │   ├── RegisterPage.tsx
    │   │   ├── HomePage.tsx
    │   │   ├── AuthForm.css
    │   │   └── HomePage.css
    │   ├── components/
    │   │   └── ProtectedRoute.tsx
    │   ├── context/
    │   │   └── AuthContext.tsx
    │   ├── api/
    │   │   └── client.ts
    │   └── types/
    │       └── auth.ts
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts
    ├── index.html
    └── .gitignore
```

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the server:
```bash
uvicorn main:app --reload
```

The backend will be available at `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
  - Request: `{ "email": "user@example.com", "username": "username", "password": "password", "full_name": "optional" }`
  - Response: `{ "access_token": "token", "token_type": "bearer", "user": {...} }`

- `POST /api/auth/login` - Login user
  - Request: `{ "email": "user@example.com", "password": "password" }`
  - Response: `{ "access_token": "token", "token_type": "bearer", "user": {...} }`

- `GET /api/auth/me` - Get current user profile
  - Requires Authorization header with Bearer token

## Features

✅ User registration with email validation
✅ Secure login with password hashing (bcrypt)
✅ JWT token-based authentication
✅ Protected routes
✅ Session management with localStorage
✅ Beautiful, responsive UI
✅ Form validation
✅ Error handling
✅ Automatic token refresh in requests

## Technology Stack

**Backend:**
- FastAPI - Modern Python web framework
- SQLAlchemy - ORM for database
- Pydantic - Data validation
- Jose - JWT token handling
- Passlib - Password hashing

**Frontend:**
- React 18 - UI library
- TypeScript - Type safety
- React Router - Routing
- Axios - HTTP client
- Vite - Build tool
- CSS3 - Styling with animations

## Security Features

- Password hashing with bcrypt
- JWT token-based authentication
- Email validation
- Secure password requirements (minimum 8 characters)
- CORS enabled for cross-origin requests
- Protected routes
- Token storage in localStorage

## Environment Variables

Backend (create `.env` file):
```
SECRET_KEY=your-secret-key-change-in-production
DATABASE_URL=sqlite:///./test.db
```

Frontend: Uses `http://localhost:8000` as API base URL (configurable in `src/api/client.ts`)

## Testing the Application

1. Open `http://localhost:3000` in your browser
2. Click "Sign up" to create a new account
3. Enter email and password
4. After successful registration, you'll be redirected to the home page
5. View your profile information
6. Click "Logout" to sign out
7. Test login with your credentials

## Notes

- The database is automatically created when the backend starts
- Email must be valid and unique
- Passwords must be at least 8 characters long
- Usernames are auto-generated from the email address during registration
- Tokens expire after 30 minutes (configurable in `auth.py`)
- For production, change the `SECRET_KEY` in `auth.py`

## License

MIT
