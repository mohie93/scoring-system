const router = require("express").Router();
const api = require("../middlewares/api.middleware");
const controller = require("../controllers/criteria.controller");

router.post("/", api.handle(controller.addCriterion));
router.delete("/", api.handle(controller.deleteCriterion));
router.delete("/", api.handle(controller.updateCriterion));

router.post("/batch", api.handle(controller.addCriteria));
router.delete("/batch", api.handle(controller.deleteCriteria));
router.delete("/batch", api.handle(controller.updateCriteria));

module.exports = router;
