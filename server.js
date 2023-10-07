const express = require('express');
const apiRoutes = require('./route/apiRoutes.js');
const htmlRoutes = require('./route/htmlRoutes.js');

//initialize the app and create port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(apiRoutes);
app.use(htmlRoutes);

app.use('/static', express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));

