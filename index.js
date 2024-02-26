import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import { connectToDb } from './config/db.js';
import { portfolioRoute } from './routes/portfolio.router.js';
import { categoryRoute } from './routes/category.router.js';
import { tagRoute } from './routes/tag.router.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
// app.use(cors({ origin: 'https://netai.vercel.app' }));

app.use('/portfolio', portfolioRoute);
app.use('/category', categoryRoute);
app.use('/tag', tagRoute);

app.get('/', (req, res) => {
  res.send('Hi');
});

connectToDb().then(() => {
  app.listen(port, () => console.log(`Server is running on port ${port}`));
});
