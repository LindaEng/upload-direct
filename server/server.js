const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('HI')
});

app.get('/s3Url', (req, res) => {}
)

app.post('/upload', (req, res) => {
    console.log(req.body);
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})