const mong = require("mongoose");

const userSchema = new mong.Schema({
    name:
    {
        type: String, required: true,
        minLength: 3, maxLength: 20
    },

    email:
    {
        type: String, required: true,
        minLength: 8, maxLength: 30, unique: true
    },

    password:
    {
        type: String, required: true,
        minLength: 3, maxLength: 20   
    },

},
    {
        timestamps: true
    }
);

const userModel = mong.model("User", userSchema)

module.exports = userModel
