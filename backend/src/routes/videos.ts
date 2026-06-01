import express from 'express';
import { getSupabase } from '../config/supabase';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.from('videos').select('*');
    if (error) throw error;
    res.json(data);
  } catch (error) { res.status(500).json({ error: 'Failed to fetch videos' }); }
});

router.get('/:id', async (req, res) => {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.from('videos').select('*').eq('id', req.params.id).single();
    if (error) throw error;
    res.json(data);
  } catch (error) { res.status(404).json({ error: 'Video not found' }); }
});

router.put('/:id', async (req, res) => {
  try {
    const supabase = getSupabase();
    const { data, error } = await supabase.from('videos').update(req.body).eq('id', req.params.id).select();
    if (error) throw error;
    res.json(data);
  } catch (error) { res.status(500).json({ error: 'Failed to update video' }); }
});

export default router;