import express from 'express'

const app = express()

app.listen(3000, ()=>{

    console.log("Server 3000 activated")
})

app.get("/", (req,res)=>{

    res.send("Server 2 up and running")
})