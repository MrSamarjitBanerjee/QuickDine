<div align="center">

# 🍽️ QuickDine

**A full-stack restaurant discovery & table booking platform**

Discover curated restaurants, browse real-time table availability, and reserve your spot in seconds. QuickDine connects **diners**, **restaurant owners**, and **admins** in a single seamless experience — complete with role-based dashboards.

> 🎓 **Learning project** — Built as a guided, hands-on project to learn React, state management, and API integration (following a YouTube tutorial). It's fully functional and a great reference for the concepts below.

</div>

---

## ✨ Features

### 🧑‍🍳 For Diners

- Browse & search restaurants by cuisine, location, price range, and rating
- View featured & exclusive restaurant collections on the home page
- Explore rich restaurant detail pages (tags, chef, slots, reviews)
- Check **real-time seat availability** for each time slot on any date
- Book a table with occasion & special-request options
- Manage & cancel your reservations from your personal dashboard

### 🏪 For Restaurant Owners

- Register your restaurant through a guided setup wizard
- Upload images (stored on **Cloudinary**) and set cuisine, tags, price range & seat capacity
- View and manage all incoming bookings
- Update booking status (confirmed / cancelled / completed)
- Restaurants go live only after **admin approval**

### 🛡️ For Admins

- Platform-wide statistics (users, owners, bookings, restaurants)
- Approve / reject restaurant listings
- View the latest bookings across the platform

### 🔐 Authentication

- JWT-based authentication (register, login, profile)
- Role-based access control: `user`, `owner`, `admin`
- Passwords hashed with **bcrypt**

---

## 🧱 Tech Stack

### Frontend

| Technology                    | Purpose                         |
| ----------------------------- | ------------------------------- |
| **React 19** + **TypeScript** | UI framework & typed components |
| **Vite 8**                    | Build tool & dev server         |
| **Tailwind CSS 4**            | Styling                         |
| **React Router 7**            | Routing                         |
| **Axios**                     | API integration                 |
| **react-hot-toast**           | Notifications                   |
| **lucide-react**              | Icons                           |

### Backend

| Technology                  | Purpose                  |
| --------------------------- | ------------------------ |
| **Node.js** + **Express 5** | API server               |
| **TypeScript**              | Language                 |
| **MongoDB** + **Mongoose**  | Database & ODM           |
| **JSON Web Token (JWT)**    | Authentication           |
| **bcrypt**                  | Password hashing         |
| **Multer**                  | File upload handling     |
| **Cloudinary**              | Image storage & delivery |
| **TSX / Nodemon**           | Dev tooling              |

---

## 🎓 What This Project Teaches

This project was built specifically to practice and demonstrate core full-stack concepts:

- **React fundamentals** — components, props, hooks (`useState`, `useEffect`, `useContext`), and routing
- **State management** — a global `AppContext` (React Context API) managing the authenticated user, JWT token, and auth modal state across the app
- **API integration** — a centralized Axios client with request interceptors that attach the JWT token to every request
- **Backend architecture** — REST API design, MVC-style structure (models, controllers, routes)
- **Authentication & security** — JWT token flow, bcrypt password hashing, role-based authorization middleware
- **Database modeling** — Mongoose schemas & relationships (Users ↔ Restaurants ↔ Bookings)

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))
- A [Cloudinary](https://cloudinary.com/) account (for image uploads)

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/QuickDine.git
cd QuickDine
```

### 2. Set up the Server

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/QuickDine
JWT_SECRET=your_jwt_secret
NODE_ENV=development

# Optional: override the default seeded admin password (defaults to "admin123")
ADMIN_PASSWORD=your_secure_admin_password

# Cloudinary (for image uploads in owner flow)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> ⚠️ **Note:** If you are not using Cloudinary, skip those variables. The owner restaurant flow works without an image.

#### Seed the database (optional but recommended)

```bash
npm run seed
```

This creates sample users and 6 restaurants:

- **Admin** — `admin@example.com` / `admin123` (or the value of `ADMIN_PASSWORD` if set)
- **Diner** — `user@example.com` / `user123`
- **Owner** — `owner@example.com` / `owner123`

#### Start the server

```bash
npm run dev        # run with nodemon (auto-reload)
# or
npm start          # run directly with tsx
```

The API will be available at `http://localhost:5000`.

### 3. Set up the Client

In a second terminal:

```bash
cd ../client
npm install
```

Create a `.env` file in the `client` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

#### Start the client

```bash
npm run dev
```

Open `http://localhost:5173` in your browser. 🎉

---

## 🔑 Demo Accounts

After running the seed script, you can log in with:

| Role     | Email               | Password   |
| -------- | ------------------- | ---------- |
| 👑 Admin | `admin@example.com` | `admin123` |
| 🧑‍🍳 Owner | `owner@example.com` | `owner123` |
| 🍽️ Diner | `user@example.com`  | `user123`  |

---

## 📁 Project Structure

```
QuickDine/
├── client/                      # React + Vite frontend
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── assets/              # Images & shared UI data
│   │   ├── components/          # Reusable UI components
│   │   │   ├── admin/           # Admin dashboard components
│   │   │   ├── booking/         # Booking flow components
│   │   │   ├── home/            # Landing page sections
│   │   │   ├── owner/           # Owner dashboard components
│   │   │   └── restaurant/      # Restaurant detail components
│   │   ├── context/             # Global state (auth context)
│   │   ├── lib/                 # Axios API client
│   │   ├── pages/               # Route-level pages
│   │   │   ├── admin/           # Admin dashboard
│   │   │   └── owner/           # Owner dashboard
│   │   ├── App.tsx              # App routes
│   │   └── main.tsx             # Entry point
│   ├── vite.config.ts
│   └── package.json
│
└── server/                      # Express + MongoDB backend
    ├── config/                  # DB & multer config
    ├── controllers/             # Route handlers
    ├── middlewares/             # Auth & role guards
    ├── models/                  # Mongoose schemas
    ├── routes/                  # API route definitions
    ├── seed.ts                  # Database seeding script
    ├── server.ts                # Server entry point
    └── .env                     # Environment variables
```

---

## 📡 API Reference

Base URL: `http://localhost:5000/api`

### Auth

| Method | Endpoint         | Access  | Description              |
| ------ | ---------------- | ------- | ------------------------ |
| POST   | `/auth/register` | Public  | Register a new user      |
| POST   | `/auth/login`    | Public  | Login & get JWT token    |
| GET    | `/auth/me`       | Private | Get current user profile |

### Restaurants

| Method | Endpoint                              | Access | Description                                |
| ------ | ------------------------------------- | ------ | ------------------------------------------ |
| GET    | `/restaurants`                        | Public | List restaurants with search & filters     |
| GET    | `/restaurants/featured`               | Public | Get featured & exclusive restaurants       |
| GET    | `/restaurants/:slug`                  | Public | Get a single restaurant by slug            |
| GET    | `/restaurants/:id/availability?date=` | Public | Get real-time slot availability for a date |

> Query params for `/restaurants`: `search`, `priceRange`, `rating`, `location`, `sort` (`rating`, `price_low`, `price_high`)

### Bookings

| Method | Endpoint               | Access  | Description                   |
| ------ | ---------------------- | ------- | ----------------------------- |
| POST   | `/bookings`            | Private | Create a new booking          |
| GET    | `/bookings/my`         | Private | Get logged-in user's bookings |
| PUT    | `/bookings/:id/cancel` | Private | Cancel a booking              |

### Owner

| Method | Endpoint                     | Access | Description                               |
| ------ | ---------------------------- | ------ | ----------------------------------------- |
| GET    | `/owner/restaurant`          | Owner  | Get owner's restaurant                    |
| POST   | `/owner/restaurant`          | Owner  | Register a restaurant (goes to `pending`) |
| PUT    | `/owner/restaurant`          | Owner  | Update restaurant info                    |
| GET    | `/owner/bookings`            | Owner  | Get bookings for owner's restaurant       |
| PUT    | `/owner/bookings/:id/status` | Owner  | Update a booking's status                 |

### Admin

| Method | Endpoint                         | Access | Description                                |
| ------ | -------------------------------- | ------ | ------------------------------------------ |
| GET    | `/admin/restaurants`             | Admin  | List all restaurants                       |
| PUT    | `/admin/restaurants/:id/approve` | Admin  | Approve / reject / reset restaurant status |
| GET    | `/admin/stats`                   | Admin  | Get platform-wide statistics               |

---

## 🗄️ Data Models

### User

`name`, `email`, `password` (hashed, removed from responses), `phone`, `role` (`user` / `owner` / `admin`)

### Restaurant

`name`, `slug`, `description`, `cuisine`, `priceRange` (`$`–`$$$$`), `rating`, `reviewCount`, `location`, `address`, `image`, `chef`, `tags[]`, `availableSlots[]`, `featured`, `exclusive`, `owner`, `status` (`pending` / `approved` / `rejected`), `totalSeats`

### Booking

`user`, `restaurant`, `date`, `time`, `guests`, `occasion`, `specialRequests`, `status` (`confirmed` / `cancelled` / `completed`), auto-generated `bookingId` (e.g. `GR-XXXXXXXX`)

---

## ☁️ Deployment

Both the client and server include `vercel.json` configurations for easy deployment on **Vercel**.

- **Client:** Set the `VITE_API_URL` environment variable to your deployed API URL.
- **Server:** Configure `MONGODB_URI`, `JWT_SECRET`, and Cloudinary vars in the Vercel project environment settings.

---

## 🛠️ Available Scripts

### Server (`server/`)

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm run dev`   | Start server with auto-reload (nodemon) |
| `npm start`     | Start server (tsx)                      |
| `npm run seed`  | Seed the database with sample data      |
| `npm run build` | Compile TypeScript                      |

### Client (`client/`)

| Command           | Description                       |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start Vite dev server             |
| `npm run build`   | Type-check & build for production |
| `npm run preview` | Preview the production build      |
| `npm run lint`    | Run ESLint                        |

---

## 🔒 Security Notes

- Passwords are hashed with **bcrypt** before storage
- Passwords are stripped from all JSON responses
- Protected routes require a valid **JWT** bearer token
- Role-based middleware (`adminOnly`, `ownerOnly`) guards privileged endpoints
- Owners can only manage their own restaurant & bookings

---

## 📄 How to Run

A detailed, step-by-step setup document is included as `How to Run Project.pdf` in the repository root.

---

## 📝 License

This project is for **learning / educational purposes**. It was built as a guided practice project and is not production software.
