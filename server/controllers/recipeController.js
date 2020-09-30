const Recipe = require("../models/recipe");

module.exports= {

create: (req, res) => {
    let params = this.getRecipeParams(req.body);
    Recipe.create(params)
     .then(recipe => {
        res.json(recipe)
    })
     .catch(error => {
        res.send(error)
     });
},   

index: (req, res) => {
  Recipe.find()
  .then((recipes) => {
    res.json(recipes)
  })
  .catch((error) => {
    res.send(error);
    return [];
  })
  .then(() => {
    console.log("promise complete");
  });
},

show: (req, res) => {
  Recipe.findById(req.params.id)
  .exec()
  .then((recipe) => {
    res.json(recipe)
    })
  .catch((error) => {
    res.send(error);
    return [];
  })
  .then(() => {
    console.log("promise complete");
  });
},

edit: (req, res) => {
  Recipe.findById(req.params.id)
  .exec()
  .then((recipe) => {
    res.json(recipe)
    })
  .catch((error) => {
    res.send(error);
    return [];
  })
  .then(() => {
    console.log("promise complete");
  });
},

update: (req, res) => {
  let recipeId = req.params.id,
  recipeParams = {
    title: req.body.title,
    estimatedTime: req.body.estimatedTime,
    link: req.body.link,
    ingredients: req.body.ingredients,
    making: req.body.making
  };
  Recipe.findByIdAndUpdate(recipeId, {
    $set: recipeParams
  })
  .then(recipe => {
    res.json(recipe)
  })
  .catch((error) => {
    res.send(error);
  })
  .then(() => {
    console.log("promise complete");
  });
},

getRecipeParams: (body) => {
  return {
    title: body.title,
    estimatedTime: body.estimatedTime,
    link: body.link,
    ingredients: body.ingredients,
    making: body.making
  };
},

}