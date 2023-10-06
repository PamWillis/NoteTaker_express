const express = require('express');
const apiRoutes = require('./public/route/apiRoutes.js');
const htmlRoutes = require('./public/route/htmlRoutes.js');

//initialize the app and create port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/api', htmlRoutes);

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

