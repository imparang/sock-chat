const express = require('express');
const router = express.Router();

// 어느 경로로 들어왔을 때 요청을 수행
router.route('/').get((req, res, next) => {
  // views 안의 index 파일을 serve 함
  res.render('index');
});

// app.js에서 router를 사용할 수 있도록 export
module.exports = router;
