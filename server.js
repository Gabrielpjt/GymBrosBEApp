import express from 'express';
import dotenv from 'dotenv';
import ConnectionDB from './config/db.js';
import ReportRouter from './routes/ReportRouter.js';
import UserRouter from './routes/UserRouter.js';
import cors from 'cors';
import { protect } from './middleware/authMiddleware.js';

dotenv.config();

const app = express();
app.use(express.json());
app.options("*", cors());
app.use(cors());

// Default route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// User routes
app.use('/api/users', UserRouter);

// Report routes (protected)
app.use('/api/report', protect, ReportRouter);

// Database connection
ConnectionDB();

// Port
const port = process.env.PORT || 3000;

// Server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
