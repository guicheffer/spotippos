const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => {console.log(`spotippos running at http://localhost:${port}/`)});