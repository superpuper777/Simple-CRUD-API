import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
