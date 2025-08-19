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

4. while login or signup we make an API take the users and we get 10 users
   
5.  each user doesn't have a password so we put a default password for all of them which is 123456

6. while login each user appear like that from the main API     
```
    {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
    "lat": "-37.3159",
    "lng": "81.1496"
    }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
    }
    },
```

7. so you take just email and password (123456) to login .

8. thanks Eg : Hossame Elsokary. 

## License

This project is for educational purposes only and is not affiliated with Netflix.

