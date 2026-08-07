<p align="center">
<img src="https://capsule-render.vercel.app/api?type=blur&color=0:0F172A,100:F97316&height=230&text=🍽️%20QuickDine&fontColor=ffffff&fontSize=58&animation=fadeIn&desc=Restaurant%20Discovery%20%26%20Table%20Booking&descAlignY=70"/>
</p>

# 🍽️ QuickDine

A full-stack restaurant discovery and table booking platform built with the MERN stack. Users can discover restaurants, check table availability, and reserve seats, while restaurant owners and admins manage bookings through dedicated dashboards.

> Built as a learning project to strengthen React, TypeScript, Express.js, MongoDB, authentication, and REST API development. 

---

## 🚀 Features

### User
- Browse restaurants with search & filters
- View restaurant details and available time slots
- Book and cancel reservations
- Manage bookings from dashboard

### Restaurant Owner
- Register and manage restaurants
- Upload restaurant images (Cloudinary)
- View and update booking status

### Admin
- Approve or reject restaurant listings
- View platform statistics
- Manage restaurants

### Authentication
- JWT Authentication
- Role-Based Access Control (User, Owner, Admin)
- Password hashing with bcrypt

---

## 🛠 Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- bcrypt
- Multer
- Cloudinary

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/MrSamarjitBanerjee/QuickDine.git
cd QuickDine
```

### Server

```bash
cd server
npm install
```

Create `.env` using `server/.env.example`

```bash
npm run seed   # Optional
npm run dev
```

### Client

```bash
cd ../client
npm install
```

Create `.env` using `client/.env.example`

```bash
npm run dev
```

---

## 🔑 Demo Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | admin@example.com | admin123 |
| Owner | owner@example.com | owner123 |
| User | user@example.com | user123 |

---

## 📌 Key Concepts

- React Context API
- REST APIs
- JWT Authentication
- Role-Based Authorization
- CRUD Operations
- MongoDB Relationships
- File Uploads
- Cloudinary Integration
  

---
---
## 📚 What I Learned From This Guided Project

Although this project was built by following a guided tutorial, I implemented, explored, and understood the complete development workflow of a modern full-stack application. It helped me strengthen both frontend and backend fundamentals while gaining hands-on experience with real-world development practices.

### 🎨 Frontend (React)

#### React Component Architecture
Learned how to break a large application into reusable, maintainable components. Instead of writing everything in one file, features were separated into pages, layouts, and reusable UI components to improve readability and scalability.

#### React Hooks
Used **useState** for managing component state, **useEffect** for handling side effects such as API requests, and **useContext** to manage authentication and global application state without prop drilling.

#### Context API
Implemented a centralized `AppContext` to manage user authentication, JWT token, login modal state, and shared application data, eliminating unnecessary prop passing between components.

#### React Router
Built a multi-page Single Page Application (SPA) using React Router. Learned nested routing, dynamic routes, protected routes, navigation, and role-based access control for different dashboards.

#### API Integration
Connected the frontend with backend REST APIs using Axios. Learned request handling, error handling, authorization headers, reusable API clients, and asynchronous data fetching.

#### Forms & State Management
Implemented controlled forms for authentication, restaurant registration, and bookings while learning validation, user input handling, and state synchronization.

#### Conditional Rendering
Used conditional rendering extensively to display different UI based on authentication status, loading states, booking status, and user roles.

#### TypeScript in React
Learned how TypeScript improves React development through static typing, interface definitions, type safety, and better developer experience.

#### Tailwind CSS
Built responsive user interfaces using utility-first styling. Learned responsive layouts, Flexbox, Grid, spacing, reusable styling patterns, and component-based design.

---

### ⚙️ Backend (Node.js & Express)

#### REST API Development
Learned how to design RESTful APIs with clear resource-based endpoints using appropriate HTTP methods (GET, POST, PUT, DELETE) while separating business logic from routing.

#### Express Architecture
Structured the backend using a modular architecture consisting of Routes, Controllers, Models, Configurations, and Middleware, making the codebase easier to maintain and extend.

#### MongoDB & Mongoose
Learned document-based database design, schema creation, model relationships, CRUD operations, validation, and querying data using Mongoose.

#### Authentication & Authorization
Implemented secure user authentication using JWT and bcrypt. Learned token generation, password hashing, protected routes, and role-based authorization for User, Owner, and Admin.

#### Middleware
Developed an understanding of Express middleware for authentication, authorization, request parsing, file uploads, rate limiting, and centralized request processing.

#### API Security
Applied backend security practices including password hashing, CORS configuration, environment variables, rate limiting, and production configuration validation.

#### File Uploads
Integrated Multer with Cloudinary to upload, process, and store restaurant images while understanding multipart form data handling.

#### Error Handling
Implemented centralized error handling middleware to return consistent API responses while separating application errors from business logic.

#### Environment Configuration
Learned to manage sensitive credentials using environment variables and validate required configuration before starting the server.

#### Database Seeding
Created and executed seed scripts to populate the database with demo users and restaurants, simplifying local development and testing.

---

### ☁️ Deployment & Production

#### Frontend Deployment (Vercel)
Deployed the React application on **Vercel**, learning how to configure build settings, manage environment variables, and connect the frontend to a production backend through environment-based API URLs.

#### Backend Deployment (Render)
Deployed the Express.js API on **Render**, configuring environment variables, connecting to MongoDB Atlas, handling production builds, and exposing REST APIs for the frontend.

#### Environment Management
Learned to separate development and production environments using `.env` files and environment variables while ensuring sensitive credentials such as JWT secrets and database URLs remain outside version control.

#### Git & GitHub Workflow
Practiced version control using Git by managing commits, maintaining a clean repository with `.gitignore`, and publishing the project on GitHub following industry-standard workflows.

#### Full-Stack Integration
Gained a clear understanding of how a deployed React frontend communicates with a deployed Express backend through REST APIs, including handling CORS, authentication, environment-based configuration, and end-to-end request flow.








---







## 📄 License

This project was built for learning purposes.
