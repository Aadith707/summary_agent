@echo off
REM Backend Setup
echo Setting up backend...
cd backend
python -m venv venv
call venv\Scripts\activate
pip install -r requirements.txt
echo Backend setup complete!
echo.
echo To run the backend:
echo 1. cd backend
echo 2. venv\Scripts\activate
echo 3. uvicorn main:app --reload
echo.
cd..

REM Frontend Setup
echo Setting up frontend...
cd frontend
call npm install
echo Frontend setup complete!
echo.
echo To run the frontend:
echo 1. cd frontend
echo 2. npm run dev
echo.
cd ..

echo.
echo All setup complete! Open two terminals:
echo - Terminal 1: cd backend && venv\Scripts\activate && uvicorn main:app --reload
echo - Terminal 2: cd frontend && npm run dev
echo.
pause
