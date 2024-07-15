const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/hello", async (req, res) => {
    res.send({ ok: true, msg: "hello" });
});

// Serve index.html for any other routes
app.get("/*", async (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});
