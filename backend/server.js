const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const appointmentRoutes = require('./routes/appointments');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
const jobRoutes = require('./routes/jobs');
const expertConsultationRoutes = require('./routes/expertConsultations');
const orderRoutes = require('./routes/orders');
const paymentRoutes = require('./routes/payments');

dotenv.config();

const app = express();

// Core middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger (lightweight) to debug routing issues
app.use((req, _res, next) => {
  console.log(`[REQ] ${req.method} ${req.originalUrl}`);
  next();
});

// Static (if needed)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// DB connect
connectDB(process.env.MONGODB_URI);

// Routes
app.use('/api/appointments', appointmentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/expert-consultations', expertConsultationRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payments', paymentRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Errors
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';
app.listen(PORT, HOST, () => {
  console.log(`🚀 Server is running on http://${HOST}:${PORT}`);
});

module.exports = app;

