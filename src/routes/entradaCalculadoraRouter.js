var express = require("express");
var router = express.Router();
var entradaCalculadoraController = require("../controllers/entradaCalculadoraController");

router.post("/cadastrar", function (req, res) {
    entradaCalculadoraController.cadastrar(req, res);
});

module.exports = router;