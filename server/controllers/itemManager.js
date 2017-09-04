let items = require("./items");
let id = 7;
let cartList = [];
let info= [];

module.exports ={
    getitems(req, res) {
        res.send(items)
    },

    addToCartList(req, res) {
        let item = items.filter(item=> (item.id == req.params.id))
        cartList.push(item[0])
        res.send(cartList)
    },

    removeBought(req, res) {
        items = items.filter(item=>!(item.id == req.params.id))
        res.send()
    },
    
    getInfo(req, res) {

        let item = items.filter(item =>(item.id == req.params.id))
        res.send(item[0].info)
        console.log(item)
    }
}