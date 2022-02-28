const express = require('express')
const app = express();
const data = require('./data/mongo')
const path = require('path')
const itemModel = require('./model/todoList')
const getListRouter = require('./routers/getListRouter')
const addItemRouter = require('./routers/addItemRouter')
const deleteRouter = require('./routers/deleteItemRouter')
const checkedRouter = require('./routers/checkedRouter')
const updateRouter = require('./routers/updateRouter')

app.use(express.urlencoded({extended: true}))

app.get('/', getListRouter) //get list todo
app.post('/',addItemRouter) // add item todo
app.use('/delete',deleteRouter) //delete 1 item
app.use('/checked',checkedRouter) //checked 1 item
app.use('/update',updateRouter) // update item
data.connect().then((result) => {
    app.listen(3000);
})