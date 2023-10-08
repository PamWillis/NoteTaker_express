const express = require('express');
const apiRoutes = require('./public/route/apiRoutes');
const htmlRoutes = require('./public/route/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

//app listener to start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

