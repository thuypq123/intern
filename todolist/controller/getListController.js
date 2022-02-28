const itemModel = require('../model/todoList')
exports.getList = async (req, res, next) => {
    const offset = req.query.offset||0;
    const limit = req.query.limit||5;
    console.log(offset, limit);
    try{const data = await itemModel.find().skip(2).limit(2);
        const data2 = await res.json(data);
    }catch(err){
        res.json({error:"error"})
        console.log(err)
    }
}