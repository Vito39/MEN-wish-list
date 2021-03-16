const express = require('express');
const app = express();
const port =process.env.PORT || 5000;
const bodyParser = require('body-parser');

 require('./models/wish');

// serving static files 
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended:false}))


app.use(bodyParser.json())


app.use(express.static('public'))

// import routes
// app is passed to imported module
const routes = require('./routes')(app);

app.set("view engine","ejs");




app.listen(port,()=>{
    console.log('server is running on'+port);
})