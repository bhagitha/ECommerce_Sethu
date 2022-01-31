const express=require('express')
const router=express.Router()
const bcryptjs=require('bcryptjs')
const logindb=require('../models/login')
const regdb=require('../models/register')
const jwt=require('jsonwebtoken')

router.post('/add',(req,res)=>{
  bcryptjs.hash(req.body.password,10,(error,hashval)=>{
        console.log(hashval)
        const data={
            username:req.body.username,
            password:hashval
        }
        const logindata=logindb(data)
        logindata.save().then((response)=>{
            console.log(response)
            logindb.findOne({username:req.body.username}).then((response)=>{
                console.log(response)
                const id=response._id
                let regdata={
                    loginid:id,
                    usname:req.body.usname,
                    email:req.body.email,
                    mob:req.body.mob,
                    sex:req.body.sex
                }
                var regitems=regdb(regdata)
                regitems.save().then((response)=>{
                    console.log("data from server"+ response)
                    res.status(200).json({
                        data:response
                    })
                })
            })
        })
    })
    
})
router.get('/logn',(req,res)=>{    
    let fetchuser
    logindb.findOne({username:req.body.username})
    .then((response)=>{
        console.log(response)
        if(!response){
            
            res.json({
                message:"Username not found.."
                
            })
        }
        fetchuser=response
        
        return bcryptjs.compare(req.body.password,response.password)
        
    }).then((response)=>{
        if(!response){
            res.json({
                message:"check your password.."
            })
        }
        else{
            res.json({
                message:"login successfully.",
                data:fetchuser
            })
        }
        const id=fetchuser._id
        regdb.findOne({loginid:id}).then((response)=>{
            const token=jwt.sign({username:fetchuser.username,userid:fetchuser._id},"eshopyuser")
            console.log(token)
        })
    })
    console.log(req.body.username)
    console.log(req.body.password)
})

module.exports=router