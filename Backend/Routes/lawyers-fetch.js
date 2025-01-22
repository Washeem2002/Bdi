const {Router}=require('express');
const app=Router();
const {lawyers_modle}=require("../Models/lawyers_data");
app.get("/get_lawyersdata",(req,res)=>{
    lawyers_modle.find({}).then((result)=>{
        console.log(result)
        res.json(result);
    }).catch((err)=>{console.log(err)})
});
module.exports=app;