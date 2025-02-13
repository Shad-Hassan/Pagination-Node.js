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

## 5. Package.json Script

ensure dev mode using nodemon:
- Your `package.json` includes a start script:
  ```json
  "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon app.js",
    "lint": "eslint ."
  },
  ```

---

## 6. Run the Server

To start the server:
```bash
nodemon app.js
```
---

## 7. Test Response of Blogs (Hardcoded Array)
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
## 8. Test a simple pagination by hardcoded Queries
- Now try testing filtered results from the blogs , by using property of page and limit
```bash
http://localhost:5000/limitBlogs?page=1&limit=3
```
while this should be the function that fixed the page a

```bash
app.get('/static-limit-blogs', (req, res) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const lastIndex = page * limit

    const resultBlogs = blogs.slice(startIndex, lastIndex)
    res.send(resultBlogs)
})
```

