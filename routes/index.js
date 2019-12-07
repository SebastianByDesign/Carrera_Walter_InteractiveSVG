const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    // console.log('at the main route');

    let query = "SELECT id, cid, name, race, gender, hometown, description FROM zelda_characters";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        //console.log(result);

        res.render('body', { character: result });
    })
})

router.get('/characters/:name', (req, res) => {
    // console.log('hit a dynamic route');
    // console.log(req.params.id);

    let query = `SELECT * FROM zelda_characters WHERE name="${req.params.name}"`;

    sql.query(query, (err, result) => {
        if (err) {throw err; console.log(err); }

        //console.log(result);

        res.json(result[0]);
    })
})

module.exports = router;