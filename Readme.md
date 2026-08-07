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

## 📄 License

This project was built for learning purposes.
