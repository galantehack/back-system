const express = require('express');

const app = express();
const router = require('./src/routes/index')
const dotEnv = require('dotenv');
const cors = require('cors');
dotEnv.config();


// express receive json 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(router);

app.listen(4000, () => {
  console.log('Server on port 4000');
});

