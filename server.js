const express=require("express")
const app=express()
app.use(express.json())

app.get("/api/hello",async(req,res)=>{
    res.send({ok:true,msg:"hello"})
})

app.listen(5000,()=>{console.log("running at port 5000")})