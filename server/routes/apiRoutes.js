const recipeController = require("../controllers/recipeController"),
    router = require("express").Router();


router.get("/recipes", recipeController.index);
router.get("/recipe/:id", recipeController.show);

module.exports = router;