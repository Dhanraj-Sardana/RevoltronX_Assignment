##  Features

###  User Authentication
- Secure login and signup using **JWT-based authentication**.
- Session persistence with `httpOnly` cookies for enhanced security.

###  Blog Editor
- **Save as Draft**: Allows saving work in progress without publishing.
- **Publish Button**: Instantly publish your blog to the public view.
- **Auto-Save Draft**:
  - Saves automatically every 30 seconds.
  - Also triggers save if the user stops typing for 5 seconds.
- **Edit Existing Blogs**:
  - Update both drafts and published posts.
  - Prefilled form allows seamless editing.

### Blog Management
- **List All Blogs**:
  - Blogs are categorized as:
    -  Published
    -  Drafts
 
##  System Design

The backend and frontend is structured to ensure separation of concerns, scalability, and ease of maintenance:
```
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
```

##  Tech Stack
```

| Frontend               | Backend          | Other                                    |
|------------------------|------------------|------------------------------------------|
| React.js (Vite)        | Node.js          | JWT                                      |
| Tailwind CSS           | Express.js       | bcrypt                                   |
| react router dom       | MongoDB/Mongoose | Auto-save logic (Debounce + setInterval) |
| React Hook Form        | cors             | crypto                                   |
| lodash,react-hot-toast | jsonwebtoken     | cookie-parser,dotenv                     |
```