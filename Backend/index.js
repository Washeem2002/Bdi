const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');
const path=require('path');
const app=express();
const PORT=process.env.PORT || 5001;

app.use(express.json({limit: '100mb'}));
app.use("/image",express.static(path.join(__dirname,"/image")));
app.use(cors({
    origin: '*'
}));

const lawyers_fetch=require("./Routes/lawyers-fetch");
app.use(lawyers_fetch);

mongoose.connect(process.env.MONGO_URL).then(()=>{console.log("connected mongo")});
//static files
app.use(express.static(path.join(__dirname,"../frontend/build")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend/build/index.html"));
})
app.listen(PORT,()=>{console.log("app is running")})
