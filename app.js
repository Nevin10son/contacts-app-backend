const express = require("express")
const mongoose = require("mongoose")
const cors =  require("cors")
const {contactmodel} = require("./models/contacts")


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://Nevin:nevintensonk@cluster0.0rfrr.mongodb.net/contactdb?retryWrites=true&w=majority&appName=Cluster0')

app.post("/add",(req,res)=>{
    const input = req.body
    const contact = new contactmodel(input)
    contact.save()
    console.log(contact)
    res.json({status:"success"})

    
})

app.post("/search",(req,res)=>{
    const input = req.body
    contactmodel.find(input).then(
        (data)=>{
            res.json(data)
            

        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
    


})

app.post("/delete",(req,res)=>{
    let input = req.body
    contactmodel.findByIdAndDelete(input._id).then(
        (response)=>{
            
            
            res.json({Status:"success"})
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})



app.get("/view",(req,res)=>{
    contactmodel.find().then(
        (data)=>{
            res.json(data)

        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})





app.listen(8001,()=>{
    console.log("server started")
})
