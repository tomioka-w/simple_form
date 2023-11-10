const express = require('express');
const app = express();
const path = require('path');

// 静的ファイルの提供
app.use(express.static('public'));

// ルートパスへのリクエストに対する処理
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.use(express.urlencoded({ extended: true })); // フォームデータの処理に必要
app.use(express.json()); // JSONデータの処理に必要

app.post('/submit-form', (req, res) => {
  console.log(req.body); // フォームデータを表示
  res.json({ message: 'フォームが正常に送信されました' });
});

app.listen(3000, () => console.log('Server running on 3000'));
