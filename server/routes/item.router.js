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


// POST route
router.post('/', (req, res) => {

    console.log(req.body);

    let queryText = `
INSERT INTO "list" ("name", "quantity", "unit")
VALUES ($1, $2, $3);
`;

    pool.query(queryText, [req.body.item, req.body.quantity, req.body.unit])
    .then(response => {
        res.sendStatus(200);
    }).catch(error => {
        console.error(error);
        res.sendStatus(500);
    });

});



// PUT route 
router.put('/:id', (req,res) => {
    console.log('PUT /item', req.params);
    const queryText = `UPDATE "list" SET "purchased" = NOT "purchased" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error in PUT', error);
            res.sendStatus(500);
        });
});

// PUT route to reset purchased status to FALSE for all items
router.put('/', (req,res) => {
    const queryText = `UPDATE "list" SET "purchased" = NOT "purchased" WHERE "purchased" = $1;`;

    pool.query(queryText, [true])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error in PUT', error);
            res.sendStatus(500);
        });
});




// DELETE route for ALL food items

router.delete('/', (req, res) => {
    let queryText = `DELETE FROM "list"`;
    pool.query(queryText)
    .then(result => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error in delete', error);
        res.sendStatus(500);
    });
});



//DELETE route for SPECIFIC food item
router.delete('/:id', (req, res) => {
    console.log('DELETE /item', req.params);
    let queryText = `DELETE FROM "list" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log('Error in delete', error);
        res.sendStatus(500);
    });
});



module.exports = router;