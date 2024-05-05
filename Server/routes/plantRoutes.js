const express = require("express");
const router = express.Router();

const Plant = require("../controllers/plantsControler");

router.post("/bookmark", Plant.updateUserDetails);
router.post("/new", Plant.addNewPlant);
router.get("/bookmark/all/:id", Plant.getAllBookmarks);
router.get("/:id", Plant.getAllPlantsByUser);

module.exports = router;
