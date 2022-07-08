const express = require("express"); //usa o express
let router = new express.Router() //informa que o router
let controller = require("../controllers/ceExpressCtrl"); //utilizar para usar o controllers
let auth = require("../middleware/auth") //chamar para usar a autentificacao
//informar o que vai ser ativado e onde eh


router.get("/maids", controller.maidList)
router.post("/maid_info", auth.verifyJWT, controller.registerMaid)
router.get("/maid_info/:id", auth.verifyJWT, controller.maidInfo) //paramos aqui para criar a funcao


router.post("/cust_info", auth.verifyJWT, controller.registerCust)
router.get("/cust_info/:id", auth.verifyJWT, controller.custInfo)

router.get("/services", controller.services)
// router.post("/type_job", controller.typeJob)








module.exports = router; //exportando tudo para todos usar
 //nao pode estar em obbjecto se for so 1