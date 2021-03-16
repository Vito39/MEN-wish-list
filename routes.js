
//app is coming from express and it is import here

const mongoose=require("mongoose");
const {mongourl}=require('./config/keys');
const Wish = mongoose.model("wishes");

mongoose.connect(mongourl,{useNewUrlParser:true});



module.exports = (app)=>{

app.get('/profile/:id',(req,res)=>{
    res.send("you are username " + req.params.id);
})



app.get('/data',(req,res)=>{

    Wish.find({}).then(data=>{
    res.send(data)
    }).then(data2=>data2)
    
})

app.get('/about',(req,res)=>{
    res.send("this is our about page")
})

app.get('/home',(req,res)=>{
    res.send({msg:"i am fine"})
})

app.post('/sent',(req,res)=>{
    
    console.log(req.body.item);
    const Item = new Wish({wish:req.body.item});

    Item.save().then(data=>{res.send({data:data})}).catch(err=>{throw err});

})


app.delete('/remove/:id',(req,res)=>{

    Wish.findOneAndDelete({_id:req.params.id}).then(data=>{
        console.log("deleted");
        res.send(data);
    })
   
})

}