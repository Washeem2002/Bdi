const mongoose=require('mongoose');

  
  const lawyersschema=new mongoose.Schema(
    {
      "image":{type:String},
        "name":{type:String},
        "speciality":{type:String},
        "experience":{type:String},
        "cost":{type:Number},
        "location":{type:String},
        "content":{type:String}
    },{collection:"Layers_data"}
  );
  const lawyers_modle=mongoose.model('lawyers',lawyersschema);
  module.exports={lawyers_modle};