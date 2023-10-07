const router = require('express').Router();
const store = require('../../db/store.js');

// GET "/api/notes" responds with notes from database
router.get('/api/notes', (req, res) => {
  store
  .getNotes()
  .then((notes) => {
    return res.json(notes);
  })
  .catch((err) => res.status(500).json(err));
});

router.post('/api/notes', (req,res) => {
    store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});

//DELETE "api/notes" deletes note with an id equal to req.params.id
router.delete('/api/notes/:id', (req,res) => {
    store
    .removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((error) => res.status(500).json(err));
});

module.exports = router;


