// 서버
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const path = require('path');

// ejs로 함.
app.set('view engine', 'ejs');
// 렌더링을 위한 디렉토리 경로 설정
app.set('views', path.join(__dirname, 'views'));


const indexRouter = require('./routes/index');
const clubsRouter = require('./routes/clubs');

// main이 아닌 -> indexRouter로 들어가도록 한다.
app.use('/', indexRouter);
app.use('/clubs', clubsRouter);

server.listen(3000, () => {
  console.log('Express Server is now listening on localhost: 3000..');
});

