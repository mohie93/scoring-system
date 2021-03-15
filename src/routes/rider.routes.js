const router = require("express").Router();
const api = require("../middlewares/api.middleware");
const controller = require("../controllers/riders.controller");

router.post("/", api.handle(controller.createScoreRecord));
router.put("/", api.handle(controller.updateScore));

module.exports = router;
