const express = require('express');

//app use and create port
const app = express();
const PORT = process.env.PORT || 3001;

// asks express to create a route for every file in the 'public' folder and give it a '/' route
app.use(express.static('public'));
// sets up express app to handel data parser, middle wear created req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes to route files
require('./public/route/apiRoutes')(app);
require('./public/route/htmlRoutes')(app);

//app listener to start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

