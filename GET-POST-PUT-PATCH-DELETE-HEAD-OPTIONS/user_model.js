const mongoose = require("mongoose")

//Defining a Model
const userSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: Number,
        require: true,
        minlenght: 7,
    },
})

//Colocando todo o modelo dentro da const UserModel
const UserModel = mongoose.model('User', userSchema)

//exportando
module.exports = UserModel
