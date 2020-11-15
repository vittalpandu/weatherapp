const mongoose = require("mongoose");
const validator = require("validator");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength:3
    },
    phone:{
        type:Number,
        required: true,
        minlength:10
    },
    email:{
        type:String,
        required: false,
        unique:[true,"Email already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email")        
            }
        }
    },
    district:{
        type:String,
        required: true,
    },
    villagename:{
        type:String,
        required: true,
    }
})

const PersonData = new mongoose.model('PersonData',personSchema);

module.exports = PersonData;