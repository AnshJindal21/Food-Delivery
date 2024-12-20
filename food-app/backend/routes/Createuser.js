const express=require("express")
const router=express.Router()
const app = express()
const jwtSecret="ipromiseanshwillbecomesuccessfull"
const User=require("../models/User")
const {body,validationResult}=require("express-validator")
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
/*await lagana is very zaruri*/
app.use('/', router);

router.post("/createuser",[body('email','Invalid Email').isEmail(),body('name').isLength({min:5}),body('password','Invalid Password').isLength({min:5})],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const salt=await bcrypt.genSalt(10);
    const secPass=await bcrypt.hash(req.body.password,salt);
    try {
        await User.create({
            name:req.body.name,
            password:secPass,
            email:req.body.email,
            location:req.body.location
        })
        res.json({success:true});
    } catch (error) {
        console.log(error);
        res.json({success:false});

    }
})

router.post("/loginuser",[body('email','Invalid Email').isEmail(),body('password','Invalid Password').isLength({min:5})],async(req,res)=>{
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    let email=req.body.email
    try {
        let userData=await User.findOne({email});
        if(!userData){
            return res.status(400).json({errors:"incorrect email are u a new user?"})
        }
        const pwdCompare=await bcrypt.compare(req.body.password,userData.password)
        if(!pwdCompare){
            return res.status(400).json({errors:"incorrect password"})
        }
        const data={
            user:{
                id:userData.id
            }
        }
        const authToken=jwt.sign(data,jwtSecret)
        return res.json({success:true,authToken:authToken});
    } catch (error) {
        console.log(error);
        res.json({success:false});

    }
})
module.exports=router;