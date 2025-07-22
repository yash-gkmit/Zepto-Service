import express, { Express } from 'express';
import cors from 'cors';
import { router } from './routes/index';

const app: Express = express();
app.use(cors());
app.use(express.json());

app.use('/api', router);

router.get('/health', (req, res) => {
    res.send("Hello world!");
  });

const PORT = 3300;
app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`)
});