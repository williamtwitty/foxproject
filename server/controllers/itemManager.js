let items = require("./items");
let id = 7;
let cartList = [];

[{},{},{},{}]

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
    }
}