import express from 'express';
import cors from 'cors';
import path from 'path';
var bodyParser = require('body-parser')
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../frontend/build')));

app.listen(3100, () => {
    console.log('Starting API on port 3100...');
});