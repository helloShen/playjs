import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Wiki page.');
});

router.get('/about', (req, res) => {
  res.send('Wiki about page.');
});

export default router;