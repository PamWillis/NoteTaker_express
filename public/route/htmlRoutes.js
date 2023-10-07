const path = require('path');
const router = require('express').Router();

// "/notes" responds with notes.html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,  '..', 'notes.html'));
});

// All other routes respond with the index.html file
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

module.exports = router;


