const express = require("express");
const router = express.Router();
const PostModel = require("../models/post_model");


// get
router.get("/", (req, res) => {
    PostModel.find((err, docs) => { 
        !err && res.send(docs)
    })
})

//post 
router.post('/', (req, res) => {
    const newPerson = new PostModel({
        nom: req.body.nom,
        age: req.body.age,
        favoriteFoods: req.body.favoriteFoods
    });

    newPerson.save((err, docs) => {
        !err && res.send(docs)
    })
})

module.exports = router;