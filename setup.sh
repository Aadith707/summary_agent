#!/bin/bash

# Backend Setup
echo "Setting up backend..."
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
echo "Backend setup complete!"
echo ""
echo "To run the backend:"
echo "1. cd backend"
echo "2. source venv/bin/activate"
echo "3. uvicorn main:app --reload"
echo ""
cd ..

# Frontend Setup
echo "Setting up frontend..."
cd frontend
npm install
echo "Frontend setup complete!"
echo ""
echo "To run the frontend:"
echo "1. cd frontend"
echo "2. npm run dev"
echo ""
cd ..

echo ""
echo "All setup complete! Open two terminals:"
echo "- Terminal 1: cd backend && source venv/bin/activate && uvicorn main:app --reload"
echo "- Terminal 2: cd frontend && npm run dev"
echo ""
