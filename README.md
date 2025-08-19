# Assignment_4

### Frontend (React + Vite)

- Modern UI inspired by Netflix
- User authentication (Sign Up, Login)
- Responsive design

### Backend (Node.js + Express)

- RESTful API
- JWT-based authentication
- MongoDB integration for user data
- Secure routes and middleware

## Project Structure

```
backend/
  server.js                # Entry point for Express server
  config/                  # Database and environment config
  controllers/             # Route controllers (auth)
  middleware/              # Auth middleware
  models/                  # Mongoose models
  routes/                  # API route definitions
  utils/                   # Utility functions
frontend/
  src/                     # React source code
    components/            # Reusable UI components
    pages/                 # App pages (Home, Login, Signup, etc.)
    store/                 # State management
  public/                  # Static assets
  index.html               # Main HTML file
  vite.config.js           # Vite configuration
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (cloud)

### Application Setup

1. Make sure you are open Assignment_4 folder in your terminal

2. then run these command lines:

   ```sh
   npm run build
   npm run start
   ```

3. Open [http://localhost:8000] in your browser.

## License

This project is for educational purposes only and is not affiliated with Netflix.
