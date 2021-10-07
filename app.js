// 서버
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const indexRouter = require('./routes/index');
const clubsRouter = require('./routes/clubs');

// main이 아닌 -> indexRouter로 들어가도록 한다.
app.use('/', indexRouter);
app.use('/clubs', clubsRouter);

server.listen(3000, () => {
  console.log('Express Server is now listening on localhost: 3000..');
});

