const mongoose = require("mongoose")
const schema = mongoose.Schema(
        {
            "fname":String,
            "lname":String,
            "address":String,
            "mobileno":String
        }
)

let contactmodel = mongoose.model("contacts",schema);
module.exports = {contactmodel}