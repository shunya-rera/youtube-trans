const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

var ytdlRouter = require('./routes/ytdl');

app.listen(3000, () => {
  console.log('Running at Port 3000...');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/ytdl', ytdlRouter);

app.use((req, res) => {
  res.sendStatus(404);
});
