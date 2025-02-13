# Pagination Server

This is a basic Express.js server setup with MongoDB, CORS, and environment variable support.

## Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) (if using locally)

---

## 1. Setup the Project

### Create a new project directory:
```bash
cd "C:\ServerProjects"
mkdir paginationServer
cd paginationServer
```

### Initialize a Node.js project:
```bash
npm init -y
```

### Update the main entry file:
```bash
sed -i 's/"main": "index.js"/"main": "app.js"/' package.json
```

---

## 2. Install Dependencies

```bash
npm install cors dotenv express mongodb mongoose
```

- **cors** → Enables Cross-Origin Resource Sharing  
- **dotenv** → Loads environment variables from `.env`  
- **express** → Web framework for Node.js  
- **mongodb** → MongoDB driver for Node.js  
- **mongoose** → ODM for MongoDB  

---

## 3. Create Essential Files

```bash
touch README.md  # Documentation file  
touch .env       # Environment variables file  
touch .gitignore # Files to be ignored by Git  
touch app.js     # Main server file  
```

Add common Git ignore rules to `.gitignore`:
```bash
echo "node_modules/" >> .gitignore
echo ".env" >> .gitignore
echo "package-lock.json" >> .gitignore
```

---

## 4. Setup `app.js`

Open `app.js` and add the following code:
```javascript
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Default Route
app.get('/', (req, res) => {
    res.send('Server is running...');
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

## 5. Run the Server

To start the server:
```bash
node app.js
```

To use **nodemon** for automatic restarts:
```bash
npm install -g nodemon
nodemon app.js
```

---

## 6. Setup Environment Variables (`.env` file)

Edit `.env` and define your variables:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Update `app.js` to load `.env` variables:
```javascript
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Failed:", err));
```

---

## 7. Initialize Git (Optional)

If using Git, initialize a repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

---

## 8. Package.json Script

To deploy on **Render, Vercel, or Railway**, ensure:
- Your `package.json` includes a start script:
  ```json
  "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon app.js",
    "lint": "eslint ."
  },
  ```
- Upload your project to GitHub  
- Deploy using a free hosting platform like Render or Railway  

---

## Done! 🎉  
Your Express.js server is now set up and ready to use! 🚀


## 9. Test Response of Blogs (Hardcoded Array)
- First lets use the route "/blogs" to check the response
```bash
app.get('/blogs',() => {
    res.json(blogs)
})
```
the array of blogs
```bash
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
```

