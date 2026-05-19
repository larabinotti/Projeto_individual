var express = require("express");
var router = express.Router();
var humorController = require("../controllers/humorController");

router.post("/cadastrar", function (req, res) {
    humorController.cadastrar(req, res);
});
router.get("/buscarPorUsuario/:fkUsuario", function (req, res) {
    humorController.buscarPorUsuario(req, res);
});
router.put("/atualizar", function (req, res) {
    humorController.atualizar(req, res);
});

module.exports = router;