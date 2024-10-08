const express = require('express');
const path = require('path');
const multer = require('multer');
const mergePdfs = require('./merge'); // Importing the merge function

const app = express();
const upload = multer({ dest: 'uploads/' });
app.use('/static', express.static('public'));
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.post('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.post('/merge', upload.array('pdfs', 12), async (req, res, next) => {
  console.log(req.files);
  
  // Merge the two uploaded PDFs
  await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
  
  // Redirect to download the merged PDF
  res.redirect('/static/merged.pdf');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
