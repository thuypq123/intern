const itemModel = require('../model/todoList')
exports.onUpdate = async (req, res, next) => {
    try{
        const onUpdate = await itemModel.findByIdAndUpdate(req.params.ID, {content: req.body.content})
        res.redirect('/');
    }catch(err){
        res.json({error:"error"})
    }
}