var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var LUNCHES_PATH = path.join(__dirname, '../api/lunches.json')

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Tuesday Lunch' });
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

        fs.writeFile(LUNCHES_PATH, JSON.stringify(obj, null, 4), function(error) {
            if (error) {
                res.send(500)
            }
            res.send(200);
        });
        console.log(req);
    });
});

router.get('/clean', function(req, res) {
    res.render('clean', { title: 'DANGER DANGER DANGER' });
});

router.post('/clean', function(req, res) {
    console.log('so fresh so clean');
    if (req.body.command == 'obliterate') {
        var overwriteContents = {
            lunches: []
        };
        fs.writeFile(LUNCHES_PATH, JSON.stringify(overwriteContents, null, 4), function(error) {
            if (error) {
                console.log('there was an error?');
                console.log(error);
                res.send(500);
            }
            res.send(200);
        });
    }
    req.send(403);
});



router.get('/lunches', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
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


