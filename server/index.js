const express = require('express');
const mongoose = require('mongoose');
const app = express()

const FoodModel = require("./models/Food")

app.use(express.json());

mongoose.connect('mongodb+srv://leyveloper:FoodApp@foodapp.wcgbl.mongodb.net/food?retryWrites=true&w=majority', {
    useNewUrlParser : true,
})

app.get('/', async (req, res) => {
    const food = new FoodModel({foodName: 'Apple', daysSinceIAte: 3})

    try {
      await food.save()  
    } catch (error) {
        console.log(error);
    }
} )

app.listen(3001, ()=>{
    console.log("Servidor corriendo en puerto 3001");
});
