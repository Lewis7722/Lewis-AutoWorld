import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Enhanced CORS configuration
app.use(cors({
  origin: 'http://localhost:5173', // Your React app URL (Vite default)
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Alternative: If you don't know the exact frontend port, use this:
// app.use(cors());

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Enhanced MongoDB connection with better error handling
const connectDB = async () => {
  try {
    console.log('Attempting to connect to MongoDB...');
    
    // Add connection options for better stability
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    });
    
    console.log("✅ MongoDB connected successfully");
    
    // Connection event listeners
    mongoose.connection.on('error', (err) => {
      console.error('MongoDB connection error:', err);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.log('MongoDB disconnected');
    });
    
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    console.log("Please check your:");
    console.log("1. MongoDB Atlas connection string");
    console.log("2. Internet connection");
    console.log("3. IP whitelisting in MongoDB Atlas");
    process.exit(1);
  }
};

// Start server only after DB connection
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 API endpoints available at http://localhost:${PORT}/api/auth`);
  });
});