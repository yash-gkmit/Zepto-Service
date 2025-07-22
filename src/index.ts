import 'reflect-metadata';
import express, { Express } from 'express';
import cors from 'cors';
import { router } from './routes/index';
import { connectDB } from './config/db';


const app: Express = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);

router.get('/health', (req, res) => {
    res.send("Hello world!");
  });

const PORT = 3300;
connectDB()
  .then(() => {
    console.log('Database connected successfully');

    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });