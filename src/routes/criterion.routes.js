const router = require("express").Router();
const api = require("../middlewares/api.middleware");
const controller = require("../controllers/criteria.controller");

router.post("/", api.handle(controller.addCriterion));
router.delete("/", api.handle(controller.deleteCriterion));
router.put("/", api.handle(controller.updateCriterion));
router.get("/", api.handle(controller.getCriteria));

module.exports = router;
