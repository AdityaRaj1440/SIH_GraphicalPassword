
const Router = require('express').Router()
const User = require('../models/user')



Router.post('/', async (req, res) => {
    const username = "aditya"
    const pass = "4r4894ytudfdsfddfsdfdsfewrsfdsfds3498y3$t34y8yr98"
    const img = ["fsdklfladskfk","whkellfeh","wekrehhere"]
    const newUser = {
        username,
        passwordHash:pass,
        images:img
    }
    const user = new User(newUser)
    try {
        const saveUser = await user.save(newUser)
        res.status(201).json(saveUser)
    }
    catch (error) {
        console.log(error)
        res.status(400).json({error:"couldn't connect "})
    }
    

})

Router.get('/' ,async(req,res)=>{

    try{
        const users  = await User.find()
        res.status(200).json(users)
    }catch(error){
        console.log(error)
        res.status(400).json({error:error})
    }
      
      
})

module.exports = Router