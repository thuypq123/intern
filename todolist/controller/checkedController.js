const itemModel = require('../model/todoList')
exports.postCheckedItem = async (req, res, next) => {
    try{
        const getCheckecdItem = await itemModel.findById(req.params.ID);
        const onUpdate = await itemModel.findByIdAndUpdate(req.params.ID, {checked: !getCheckecdItem.checked})
        const resultUpdate = await onUpdate.save();
        console.log(resultUpdate);
    }catch(err){console.log(err)}
    res.redirect('/');
}
