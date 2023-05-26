const {con}=require('./dbconnection')
const bcrypt = require('bcrypt');
async function readall(req,res){
    try{
    const[results,fields] =await con.promise().query('select * from user');
    console.log(results)
    res.send(results)
}
catch(e){
        console.error(e);
}
}
async function create(req,res){
    const id = req.body.id;
    const email = req.body.email;
    const password = req.body.password;
    let enc;
    const phone = req.body.phone;
    const username = req.body.username;
    async function hashPassword(password) {
    enc = await bcrypt.hash(password, 10);
      return enc;
      }
      const encrypted= await hashPassword(req.body.password)
    // console.log(id, email, password, phone, username);
    try{
        const[results,fields] =await con.promise().query('INSERT INTO user values(?,?,?,?,?)',[id,email,enc,phone,username],);
        console.log("inserted")
        res.send(results)
    }
    catch(e){
            console.error(e);
    }
}
async function readid(req,res){   
    const id = req.params.id;
    try{
        const[results,fields] =await con.promise().query('select * from user where id=?',id,);
        console.log(results)
        res.send(results)
    }
    catch(e){
            console.error(e);
    }}

    async function del(req,res){    
        const id = req.params.id;
        try{
            const[results,fields] =await con.promise().query('delete from user where id = ?',id);
            console.log(results)
            res.send(results)
        }
        catch(e){
                console.error(e);
        }  }
        async function update(req,res){  
            const id=req.params.id;
            const email=req.body.email;
            const phone=req.body.phone;
            const username=req.body.username;
            try{
                const[results,fields] =await con.promise().query('update user set username=? where ID=?',[username,id],);
                console.log(results)
                res.send({
                    success:true,
                    message:"updated values of a row",
                    data:results
                })
            }
            catch(e){
                    console.error(e);
                    res.send({
                        success:false,
                        message:"tried updating a row",
                    })
            }}
module.exports={readall,create,readid,del,update}