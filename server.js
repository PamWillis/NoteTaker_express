const express = require('express');
const apiRoutes = require('./public/route/apiRoutes.js');
const htmlRoutes = require('./public/route/htmlRoutes.js');
const path = require('path')

//initialize the app and create port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

