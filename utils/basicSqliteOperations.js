const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('mydatabase.sqlite');

// Example query
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)");

    // Insert a user
    db.run("INSERT INTO users (name, email) VALUES (?, ?)", ["John Doe", "john@example.com"]);

    // Query users
    db.each("SELECT id, name, email FROM users", (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.id, row.name, row.email);
    });
});

// Close the database connection
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Closed the database connection.');
});
