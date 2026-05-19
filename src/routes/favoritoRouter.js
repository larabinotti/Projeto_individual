
var express = require("express");
var router = express.Router();
var favoritoController = require("../controllers/favoritoController");

router.get("/listarPorUsuario/:fkUsuario", function (req, res) {
    favoritoController.listarPorUsuario(req, res);
});

module.exports = router

