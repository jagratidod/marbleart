const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const compression = require('compression');
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const appointmentRoutes = require('./routes/appointments');
const userRoutes = require('./routes/users');
const adminRoutes = require('./routes/admin');
const jobRoutes = require('./routes/jobs');
const expertConsultationRoutes = require('./routes/expertConsultations');
const orderRoutes = require('./routes/orders');
const paymentRoutes = require('./routes/payments');
const faqRoutes = require('./routes/faqs');
const testimonialRoutes = require('./routes/testimonials');
const blogRoutes = require('./routes/blogs');
const navItemRoutes = require('./routes/navItems');
const aboutUsRoutes = require('./routes/aboutUs');
const experienceCentreRoutes = require('./routes/experienceCentre');
const teamRoutes = require('./routes/team');
const careersRoutes = require('./routes/careers');
const artistRoutes = require('./routes/artists');
const ourClientsRoutes = require('./routes/ourClients');
const communalProjectsRoutes = require('./routes/communalProjects');
const residentialProjectsRoutes = require('./routes/residentialProjects');
const internationalProjectsRoutes = require('./routes/internationalProjects');

dotenv.config();

const app = express();

// Compression middleware - compress all responses
app.use(compression());

// Core middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Request logger (lightweight) - only in development
if (process.env.NODE_ENV !== 'production') {
  app.use((req, _res, next) => {
    console.log(`[REQ] ${req.method} ${req.originalUrl}`);
    next();
  });
}

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
app.use('/api/faqs', faqRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/nav-items', navItemRoutes);
app.use('/api/about-us', aboutUsRoutes);
app.use('/api/experience-centre', experienceCentreRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/careers', careersRoutes);
app.use('/api/artists', artistRoutes);
app.use('/api/our-clients', ourClientsRoutes);
app.use('/api/communal-projects', communalProjectsRoutes);
app.use('/api/residential-projects', residentialProjectsRoutes);
app.use('/api/international-projects', internationalProjectsRoutes);

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

