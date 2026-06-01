import express from 'express';
import multer from 'multer';
import { getBucket } from '../config/gcs';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/', upload.single('video'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file provided' });
    const bucket = getBucket();
    const fileName = `videos/${Date.now()}-${req.file.originalname}`;
    const file = bucket.file(fileName);
    await file.save(req.file.buffer, { metadata: { contentType: req.file.mimetype } });
    const publicUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`;
    res.json({ success: true, fileName, url: publicUrl, size: req.file.size });
  } catch (error) { console.error('Upload error:', error); res.status(500).json({ error: 'Upload failed' }); }
});

export default router;