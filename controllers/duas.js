const sqlite3 = require('sqlite3');
const db = require('../db.js');

// Controller function to fetch all categories
const getAllCategories = (req, res) => {
    console.log("hello");
    db.all("SELECT * FROM category", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

// Controller function to fetch all sub-categories
const getAllSubcategories = (req, res) => {
    db.all("SELECT * FROM sub_category", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

// Controller function to fetch all duas
const getAllDuas = (req, res) => {
    db.all("SELECT * FROM dua", (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
};

module.exports = {
    getAllCategories,
    getAllSubcategories,
    getAllDuas
};
