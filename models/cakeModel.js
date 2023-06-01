const mongoose = require("mongoose");
const Joi = require("joi");

let cakeSchema = new mongoose.Schema({
  name:String,
  cals:String,
  price:Number,
  img:String,
  user_id:String,
  date_created:{
    type:Date , default:Date.now()
  },
  category_id:{
    type:String,default:"1"
  }
})

exports.CakeModel = mongoose.model("cakes",cakeSchema);

exports.createToken = (_id) => {
  let token = jwt.sign({_id},config.tokenSecret,{expiresIn:"60mins"});
  return token;
}

exports.validateCake = (_reqBody) => {
  let joiSchema = Joi.object({
    name:Joi.string().min(2).max(99).required(),
    cals:Joi.number().min(0).max(9999).required(),
    price:Joi.number().min(1).max(9999).required(),
    img:Joi.string().min(2).max(500).allow(null,"")
  })

  return joiSchema.validate(_reqBody);
}
