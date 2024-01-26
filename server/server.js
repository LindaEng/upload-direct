import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;

import {generateUploadURL} from './s3.js';

app.use(cors());

app.get('/', (req, res) => {
    res.send('HI')
});

app.get('/s3Url', async (req, res) => {
  const url = await generateUploadURL();
  res.send({ url })
}
)

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})