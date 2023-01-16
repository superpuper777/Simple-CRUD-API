import express from 'express';
import * as dotenv from 'dotenv';
import router from './router';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();
app.use(express.json());
app.use('/api', router);

app.use((req, res, next) => {
  res.status(404).send({ message: 'No routes matched' });
});

async function startApp() {
  try {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

startApp();
