const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/test', (req, res) => {
    res.json({test: "test"});
});

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});