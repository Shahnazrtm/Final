const express = require("express")
const router = express.Router()
const controller=require("../controller/prodController.js")

router.get("/", controller.getAllData)
router.get("/:id", controller.getDataById)
router.post("/", controller.postData)
router.patch("/:id", controller.patchDataById)
router.delete("/:id", controller.deleteById)
router.put("/:id", controller.putDataById)





module.exports = router