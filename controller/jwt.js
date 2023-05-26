const express = require ('express');
const jwt = require ('jsonwebtoken');
const app =express();
app.get("/",(req, res)=>{
    res.json({
        message: "welcome"
    });
});
app.post("/posts", verifyToken, (req,res)=>{
    jwt.verify(req.token,"secretkey",(err,authData)=>{
        if (err){
            res.sendStatus(403);
        }else{
            res.json({
                message: "POST created...",
                authData
            });
        }
    });
})