const express = require('express');
const duaRouter = require('./routes/duas.js');
const cors = require('cors');

const app = express();
// Enable CORS for all routes
app.use(cors());
// Define your API endpoints here

// Middleware to dynamically replace hostname in request's base URL
app.use((req, res, next) => {
    req.url = req.url.replace(`http://${req.hostname}`, '');
    next();
  });
// Use route modules
app.use('/', (req, res, next) => {
    res.send('API is running');
  });
app.use('/api/duas', duaRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});