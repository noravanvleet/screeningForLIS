import express from 'express';
import path from 'path';
import router from './route/form.js';
import bodyParser from 'body-parser';

const app = express();

const port = 3030;

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

// This deploys the application onto the local host at a given port
app.listen(port, () => {
    console.log('Form web application is on http://localhost:' + port);
});

// This serves the public directory
app.use(express.static(path.join(process.cwd(), 'public')));

// Enables the router to be used
app.use('/form', router);

