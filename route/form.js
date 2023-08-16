import config from '../db_config.js';
import mysql from 'mysql2';
import express from 'express';
import bodyParser from 'body-parser';
const router = express.Router();
const connection = mysql.createConnection(config);

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: false}));

// Adds user form input to the mysql form table
router.post('/formEntry', (req,res)=> {
    const name = req.body.userName;
    const age = req.body.userAge;
    const title = req.body.userTitle;
    const hometown = req.body.userHometown;

    // Inserts the user inputs to the mysql table
    connection.query(`INSERT INTO form(name, age, title, hometown) 
                      VALUES(?, ?, ?, ?)`,
                      [name, age, title, hometown], 
                      (err, result) => {
                        if (err) throw err;
                      }
                    );

    // Redirects to the proper page
    res.redirect('/confirmation.html');
});

router.get('/formPastEntries', (req, res) => {
  // // Redirects to the proper page
  // res.redirect('/confirmation.html');
  connection.query(`SELECT * FROM form`,
                    (err, rows) => {
                      if (err) throw err;
                      res.send(rows);
                    }
                  );
})

export default router;