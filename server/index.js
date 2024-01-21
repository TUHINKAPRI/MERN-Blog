const express=require('express');
const app=express();
const connection =require('./config/db.connection')
require('dotenv').config();

app.use(express.json());





const PORT=process.env.PORT||4000
connection()
app.listen(PORT,()=>{
  console.log(`server is started is port no. ${PORT}`)
})