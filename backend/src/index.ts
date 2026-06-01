import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { initializeSupabase } from './config/supabase';
import { initializeGCS } from './config/gcs';
import videoRoutes from './routes/videos';
import uploadRoutes from './routes/upload';

dotenv.config();
const app = express();
const PORT = process.env.BACKEND_PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

initializeSupabase();
initializeGCS();

app.use('/api/videos', videoRoutes);
app.use('/api/upload', uploadRoutes);
app.get('/health', (req, res) => res.json({ status: 'Backend is running', timestamp: new Date() }));

app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));