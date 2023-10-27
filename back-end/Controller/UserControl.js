const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const users=require('../Model/User');


exports.getUSER=async(req,res)=>{
    try {
        const getuser=await user.find()
        res.status(200).send({message:'Done', getuser})
        
    } catch (error) {
        res.status(500).send(error)

    }
}


exports.deleteUSER=async(req, res)=>{
    try {
        const deleteuser = await user.findByIdAndDelete(req.params.id)
        res.status(200).send({message: "Deleted successfully", deleteuser})
    } catch (error) {
        res.status(500).send(error)
    }
}
exports.register= async(req, res)=>{
    const {name,email, password,role,phone_Number}= req.body
    try {
        const find= await users.findOne({email})
        if (find) {
            res.status(400).send({errors:[{msg: 'Email already registered'}]})   
        }
        else {
            const NewUser = new users(req.body)
            const salt=10
            const hashpassword= bcrypt.hashSync(password, salt)
            NewUser.password = hashpassword
            const data = {
                id: users._id,
            }
            const token = jwt.sign(data, '123456')
            await NewUser.save()
            res.status(200).send({message: 'Registered successfully', user:NewUser, token})
        }
    } catch (error) {
        res.status(500).send({message:'Registering failed', error})
    }
}
exports.loginUser= async(req, res)=>{
    const {email,password}=req.body
    try {
        const user = await users.findOne({email})
        console.log(user)
        if (!user){
            res.status(400).send({errors:[{msg:'Email does not exist'}]})
        }
        else {
            const Compare = bcrypt.compareSync(password, user.password)
            if(!Compare){
                res.status(400).send({errors:[{msg:'Wrong password'}]})
            }
            else {
                const data = {
                    id: user._id,
                }
                const token = jwt.sign(data, '123456')
                res.status(200).send({message:'Login successfully', user, token})
            }
        }
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}
