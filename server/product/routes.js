const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.get("/", controller.getProducts);
router.post("/add", controller.addProduct);
router.get("/:id", controller.getProductById);
router.delete("/:id", controller.deleteProduct);
router.put("/edit/:id", controller.updateProduct);

module.exports = router;
