const mongoose = require('mongoose');
const URL = "mongodb+srv://socket_io:thuy1234@cluster0.uhkg4.mongodb.net/itern?retryWrites=true&w=majority";
async function connect() {
    try {
        await mongoose.connect(URL);
        console.log("Success Connected");
    } catch (error) {
        console.log(error);
    }
}
module.exports = { connect };