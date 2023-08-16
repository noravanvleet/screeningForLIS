import config from '../db_config.js';
import mysql from 'mysql';
import express from 'express';
const router = express.Router();
const connection = mysql.createConnection(config);

// router.post('/formEntry', (res,req)=> {
//     const name = req.body.name;
//     const age = req.body.age;
//     const title = req.body.title;
//     const hometown = req.body.hometown;

//     // connection.query(`INSERT INTO form(name, age, title, hometown) 
//     //                   VALUES('${name}', '${age}'), '${title}', '${hometown}')`
//     //                 );

// });

export default router;