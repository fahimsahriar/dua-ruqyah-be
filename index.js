const express = require('express');
const duaRouter = require('./routes/duas.js');

const app = express();

// Define your API endpoints here
// Use route modules
app.use('/api/duas', duaRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
