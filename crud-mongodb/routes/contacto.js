const { Router } = require("express");
const { readContacto, createContacto, deleteContacto, updateConctacto } = require("../controllers/conctactos");


const router = Router();
router.get("/", readContacto),
router.post("/create", createContacto)
router.post("/update",updateConctacto)
router.get("/delete/:id", deleteContacto)

module.exports = router;