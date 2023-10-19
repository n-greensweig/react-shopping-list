const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');



//GET route
router.get('/', (req, res) => {


    let queryText = `SELECT * FROM "list" ORDER BY "id" ASC;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.error('ERROR IN GET /items', error);
            res.sendStatus(500);
        });

});


//POST route




//PUT route 




//DELETE route




module.exports = router;