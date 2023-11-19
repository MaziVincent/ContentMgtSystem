require('dotenv').config();
const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors')
const errorHandler = require('./middleware/errorHandler')

const {logger} = require('./middleware/logEvents')
const verifyJWT = require('./middleware/verifyJWT');
const credentials = require('./middleware/credentials');
const mongoose = require('mongoose');
const connectDb = require('./config/dbConn')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3500;
const corsOptions = require('./config/corsOptions')


//connect to mongoDB
connectDb();
//custom middleware logger
app.use(logger)

//verify certificate of origin headers
//fetch cookies credentials requirements
app.use(credentials)
//cors
app.use(cors(corsOptions))
//handle ur encoding data 
app.use(express.urlencoded({extended:false}))
//built in middleware
app.use(express.json()); 
//serve static files
app.use(cookieParser())
app.use(express.static(path.join(__dirname,'/public')));
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/auth')); //login
app.use('/refresh', require('./routes/refresh')); //refresh endpoint
app.use('/logout', require('./routes/logout')); //logout
app.use(verifyJWT);
app.use('/employees', require('./routes/api/employee'));
app.use('/learningPath', require('./routes/learningPath'));
app.use('/module', require('./routes/module'));
app.use('/topic', require('./routes/topic'));
app.use('/lesson', require('./routes/lesson'));


 app.all('*',(req, res) =>{

    res.status(404);
    if(req.accepts('html')){

        res.sendFile(path.join(__dirname,'views','404.html'));
    } else if(req.accepts('json')){

        res.json({error:'404 not Found'})
    }else{
        res.type('txt').send('404 not found')
    }
    
 })
 
 
app.use(errorHandler)



 mongoose.connection.once('open', () => {

    console.log('connected to MongoDB')

    app.listen(PORT, ()=>{
        console.log(`Server listening on port ${PORT}`)
    });
 });


