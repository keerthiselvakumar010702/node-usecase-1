const {readall,create,readid,del}=require('./function')
const {insertuser,updateuser}=require('./schema')
const express = require('express');
const app = express()
const port = 3000
app.use(express.json());
const Joi = require("joi");
//adding joi
const {
    validate
  } = require('./middle')
// creating and inserting
  app.post('/user/create',validate(insertuser),create)
//reading all entries
    app.get("/user/readall",readall)
//reading the specific entry
    app.get("/user/read/:id",readid)
//deleting the entry 
    app.delete("/user/delete/:id",del)
//updating the entry    
    app.put("/user/update/:id",validate(updateuser),update)
    
      
      app.listen(port, (err) => {
        if (err) {console.log(err)}
        else {console.log("on port 3000");}
      })