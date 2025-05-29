"""##  System Design

The backend is structured to ensure separation of concerns, scalability, and ease of maintenance:

backend/
├── config/                   # Configuration files
│   └── Mongodb.js            # MongoDB connection setup
│
├── controllers/              # Core business logic for each route
│   ├── AllBlogs.js           # Controller to fetch all blogs
│   ├── EditBlog.js           # Controller to edit blogs
│   ├── Home.js               # Home data controller
│   ├── Login.js              # Login handler
│   ├── Logout.js             # Logout handler
│   ├── Publish.js            # Publish blog controller
│   ├── save-draft.js         # Save draft functionality
│   └── Signin.js             # Registration handler
│
├── helper/                   # Utility functions
│   └── generateSecretKey.js  # Secret key generator (for JWT)
│
├── models/                   # Mongoose models
│   ├── Blog.js               # Blog schema
│   └── User.js               # User schema
│
├── routes/                   # Express routes
│   ├── Auth_Route.js         # Authentication-related routes
│   └── blogRoute.js          # Blog-related endpoints
│
├── .env                      # Environment variables (PORT, SECRETKEY)
├── .gitignore                # Ignore node_modules, .env
├── app.js                    # Main entry point, sets up middleware, DB, and routes
├── package.json              # Project dependencies and scripts
└── package-lock.json         # Exact versions of dependencies



frontend/
├── public/                   # Static files (images, favicon)
│
├── src/
│   ├── assets/               # Additional static or reusable assets
│   ├── components/           # Reusable React components
│   │   ├── Blog.jsx          # UI to handle response from GET '/blogs' and PATCH '/blogs/:id'
│   │   ├── Contact.jsx       # My Resume (additional feature)
│   │   ├── Home.jsx          # Takes username and userID from cookies
│   │   ├── Login.jsx         # Handles response from POST '/auth/login'
│   │   ├── Logout.jsx        # Handles response from POST '/auth/logout'
│   │   ├── Nav.jsx           # React functional component for NavBar
│   │   └── Signin.jsx        # Handles response from POST '/auth/signin'
│
│   ├── App.jsx               # Main component with routing
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
│
├── index.html                # Base HTML file
├── package.json              # Project metadata and dependencies
└── vite.config.js            # Vite configuration
"""