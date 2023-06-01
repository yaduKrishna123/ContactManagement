const express=require('express')

const Adduser=require('../logic/logic')

const router=express.Router()

router.post('/useradd',Adduser.Adduser)
router.get('/allcontacts',Adduser.Allusers)
router.put('/editcontact/:id',Adduser.edituser)
router.get('/viewcontact/:id',Adduser.viewuser)
router.delete('/delete/:id',Adduser.deleteuser)
module.exports=router