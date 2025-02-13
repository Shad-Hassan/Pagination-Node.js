require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

const blogs = [
{id:1 , name:"blog 1"},
{id:2 , name:"blog 2"},
{id:3 , name:"blog 3"},
{id:4 , name:"blog 4"},
{id:5 , name:"blog 5"},
{id:6 , name:"blog 6"},
{id:7 , name:"blog 7"},
{id:8 , name:"blog 8"},
{id:9 , name:"blog 9"},
{id:10 , name:"blog 10"},
]

// Default Route
app.get('/', (req, res) => {
    res.send(`Server is running on PORT:${PORT}`);
});
app.get('/blogs',(req , res) => {
    res.json(blogs)
})

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});