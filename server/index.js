const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 3002;
const itemManager = require('./controllers/itemManager')


const app = express();

app.use(bodyParser.json());
app.use(cors())

app.get("/api/get", itemManager.getitems)
app.delete("/api/delete/:id", itemManager.removeBought)
app.post("/api/post/:id", itemManager.addToCartList)
app.get("/api/getinfo/:id", itemManager.getInfo)


app.listen(port, ()=>{
    console.log(`shipped docked at port ${port}`)
})

