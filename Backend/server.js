const express = require('express');
const cors = require('cors');  
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ 
    message: "Hello from the Backend!",
    timestamp: new Date().toLocaleTimeString()
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
