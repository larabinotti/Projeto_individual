var express = require("express");
var router = express.Router();
var entradaDiarioController = require("../controllers/entradaDiarioController");

router.post("/cadastrar", function (req, res) {
    entradaDiarioController.cadastrar(req, res);
});


module.exports = router;