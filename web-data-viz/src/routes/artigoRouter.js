var express = require("express");
var router = express.Router();
var artigoController = require("../controllers/artigoController");

router.get("/listarTodos", function (req, res) {
    artigoController.listarTodos(req, res);
});
router.get("/buscarPorId/:id", function (req, res) {
    artigoController.buscarPorId(req, res);
});
router.post("/cadastrar", function (req, res) {
    artigoController.cadastrar(req, res);
});
router.delete("/deletar/:id", function (req, res) {
    artigoController.deletar(req, res);
});

module.exports = router;