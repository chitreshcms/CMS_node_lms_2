const express= require('express');
const app= express();
const morgan = require('morgan');
const bodyParser= require('body-parser');

const courseRoutes= require('./api/routes/courses');
const subjectRoutes= require('./api/routes/subjects');
const teacherRoutes= require('./api/routes/teachers');
const studentRoutes= require('./api/routes/students');
const batchRoutes = require('./api/routes/batches');
const lectureRoutes= require('./api/routes/lectures');

//morgan - error logging
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
  });

app.use('/courses',courseRoutes);
app.use('/subjects',subjectRoutes);
app.use('/teachers',teacherRoutes);
app.use('/students',studentRoutes);
app.use('batches',batchRoutes);
app.use('lectures',lectureRoutes);

app.use((req,res,next)=>{
    const error= new Error("NOT FOUND!");
    error.status(404);
    next(error);
    // res.status(200).json({
    //    message:"It Works." 
    // })
});

app.use((error,req,res,next)=>{
res.status(error,status||500);
res.json({
    error:{
            message:error.message
    }
});
});
module.exports=app;