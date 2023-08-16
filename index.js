import express from 'express';
import path from 'path';
import router from './route/form.js';
import cors from 'cors';

const app = express();

app.use(cors); 

const port = 3030;

// This deploys the application onto the local host at a given port
app.listen(port, () => {
    console.log('Form web application is on http://localhost:' + port);
});

// This serves the public directory
app.use(express.static(path.join(process.cwd(), 'public')));

// Enables the router to be used
app.use('/form', router);

