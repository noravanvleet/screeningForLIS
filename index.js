import express from 'express';
import path from 'path';

const app = express();
const formRouter = require('./route/form');
const port = 3000;

// This deploys the application onto the local host at a given port
app.listen(port, () => {
    console.log('Form web application is on http://localhost:' + port);
});

// This serves the public directory
app.use(express.static(path.join(process.cwd(), 'public')));

// Enables the router to be used
app.use('/form', formRouter);

