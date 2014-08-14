var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var LUNCHES_PATH = path.join(__dirname, '../api/lunches.json')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'SM lunches' });
});

router.get('/add', function(req, res) {
    res.render('add', { title: 'Add a lunch'});
});

router.post('/add', function(req, res) {
    fs.readFile(LUNCHES_PATH, 'utf8', function(err, data) {
        if (err) {
            res.send(500);
        }
        console.log('POST!!');
        console.log(data);
        var obj = JSON.parse(data);
        console.log(obj.lunches);
        console.log(req.body);
        obj.lunches.push(req.body);

        fs.writeFile(LUNCHES_PATH, JSON.stringify(obj), function(error) {
            if (err) {
                res.send(500)
            }
            res.send(200);
        });
        console.log(req);
    });
})

router.get('/lunches', function(req, res) {
    // res.setHeader('Content-type', 'application/json');
    fs.readFile(LUNCHES_PATH, 'utf8', function(err, data) {
        if (err) {
            res.json(500);
        }
        res.setHeader('Content-type', 'application/json');
        res.send(data);
    });
    //res.json('../api/lunches.json');
});

module.exports = router;
