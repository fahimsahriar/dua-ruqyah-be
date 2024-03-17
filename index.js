const express = require('express');
const sqlite3 = require('sqlite3');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to SQLite database
const db = new sqlite3.Database("./dua_main.sqlite");

// Example query
// db.serialize(() => {
//     // Query users
//     db.each("SELECT * FROM 'dua' LIMIT 0,30", (err, row) => {
//         if (err) {
//             console.error(err.message);
//         }
//         console.log(row.id, row.dua_name_bn, row.dua_name_en);
//     });
// });

// Define your API endpoints here
// API endpoint to fetch all categories
app.get('/api/categories', (req, res) => {
    db.all("SELECT * FROM category", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});
// API endpoint to fetch all sub categories
app.get('/api/sub-categories', (req, res) => {
    db.all("SELECT * FROM sub_category", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});
// API endpoint to fetch duas
app.get('/api/dua', (req, res) => {
    db.all("SELECT * FROM dua", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});
// API endpoint to fetch posts by category
app.get('/api/posts/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;
    db.all("SELECT * FROM posts WHERE subcategory_id IN (SELECT id FROM subcategories WHERE category_id = ?)", [categoryId], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
