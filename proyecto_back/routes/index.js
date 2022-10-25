var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 //res.render('index', { title: 'Hola Mundo' });
 res.send("Prueba sin motor de búsqueda 3")
});

module.exports = router;
