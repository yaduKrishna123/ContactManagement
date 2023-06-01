require('dotenv').config()
const express=require('express')

const cors=require('cors')
const server=express()
require('./db/connection')
const router=require('./router/router')

server.use(cors())
server.use(express.json())
server.use(router)

const PORT=4000

server.listen(PORT,()=>{
    console.log(`server is listening to port ${PORT}`);
})