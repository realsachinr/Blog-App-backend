const express = require('express');
const app = express();

// import env file
require('dotenv').config();

// Define port
const PORT = process.env.PORT || 3002;

// Middleware 
app.use(express.json());

// Import Route File 
const blog = require('./routes/blog');

// Mounting
app.use('/api/blog', blog);

// import DAtabase
const connectDb = require('./config/database');

// Db Calling
connectDb();

// Server Listining
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Welcome to Blog API")
})