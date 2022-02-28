const itemModel = require('../model/todoList')
exports.deleteItem = async (req, res, next) => { 
    console.log(req.params.ID);
    try{
        const itemDelete = await itemModel.findByIdAndDelete({_id: req.params.ID})
        res.json(itemDelete)
    }catch(err){res.json({error:"error"})}
}

exports.postDeleteItem = (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
}