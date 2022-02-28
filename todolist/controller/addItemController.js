const itemModel = require('../model/todoList')
exports.postItem = async (req, res, next) => {
    const onAdd = await itemModel.create({content: req.body.content});
    const resultAdd = await onAdd.save();
    res.json(resultAdd);
}