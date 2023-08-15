import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('Form web application is on http://localhost:' + port);
});

app.use(express.static(process.cwd()));