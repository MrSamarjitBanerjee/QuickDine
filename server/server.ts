import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import restaurantRouter from "./routes/restaurantRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import adminRouter from "./routes/adminRoutes.js";

const requiredEnvVars = ["JWT_SECRET", "MONGODB_URI", "CLOUDINARY_URL" , "ADMIN_EMAIL" , "ADMIN_PASSWORD" , "OWNER_EMAIL" , "OWNER_PASSWORD"];
const missing = requiredEnvVars.filter((key) => !process.env[key]);

if (missing.length > 0) {
  console.error(
    `Missing required environment variable(s): ${missing.join(", ")}`
  );
  process.exit(1);
}

const app = express();

// Connect to MongoDB
await connectDB();

// Middleware
const allowedOrigins = (
    process.env.CORS_ORIGIN || "http://localhost:5173,http://127.0.0.1:5173"
)
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());

// Rate limiting to mitigate brute-force / abuse
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 300, // limit each IP to 300 requests per window
    standardHeaders: true,
    legacyHeaders: false,
    message: { message: "Too many requests, please try again later." },
});

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 20, // limit each IP to 20 auth requests per window
    standardHeaders: true,
    legacyHeaders: false,
    message: { message: "Too many login attempts, please try again later." },
});

// Routes
app.use("/api", apiLimiter);
app.use("/api/auth", authLimiter, authRouter);
app.use("/api/restaurants", restaurantRouter);
app.use("/api/bookings", bookingRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/admin", adminRouter);

app.get("/", (req: Request, res: Response) => res.send("Server is Live!"));

// Global Error Handler
// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("Unhandled Error:", err);

    res.status(500).json({
        message: err.message || "Internal Server Error",
        stack: app.get("env") === "development" ? err.stack : undefined,
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));
