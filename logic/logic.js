const user=require('../model/userschema')

exports.Adduser=async(req,res)=>{
    const {username,image,mobile}=req.body
    try{
        const data=await user.findOne({mobile})
        if(data){
            res.status(200).json('user already exists')
        }
        else{
            const newdata=await new user({
                username,mobile,image
            })
            await newdata.save()
            res.status(201).json('Contact Added Successfully')
        }

    }
    catch(error){
        res.status(404).json(error)
    }
}

exports.Allusers=async(req,res)=>{
    const search=req.query.search
    const query={
        username:{$regex:search,$options:"i"}
    }
    try{
        const allusers=await user.find(query)
        if(allusers){
            res.status(200).json(allusers)
        }

    }
    catch(error){
        res.status(404).json(error)
    }
}
exports.edituser=async(req,res)=>{
    const {username,mobile,image}=req.body
    const {id}=req.params
    try{
        const data = await user.findByIdAndUpdate({_id:id},
            {username,mobile,image},{
                new:true
            })
            await data.save()
            res.status(200).json(data)

    }
    catch(error){
        res.status(401).json(error)
    }
}

exports.viewuser=async(req,res)=>{

    const {id}=req.params
    try{
        const data=await user.findOne({_id:id})
        if(data){
            res.status(200).json(data)
        }
    }
    catch(error){
        res.status(401).json(error)
    }

}

exports.deleteuser=async(req,res)=>{
    const {id}=req.params

    try{
        const data=await user.deleteOne({_id:id})
        
       

            const alldata=await user.find()
            res.status(200).json(alldata)

        
       
           
        

    }
    catch(error){
        res.status(401).json(error)
    }
}