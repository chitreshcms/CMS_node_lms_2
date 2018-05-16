const express= require('express');
const router = express.Router();

// const studentRoutes= require('.api/routes/student');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'GET request to /students'
    });
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'POST request to /students'
    });
});

// const studentRoutes= require('.api/routes/students');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'GET request to /students'
    });
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'POST request to /students'
    });
});

router.get('/:studentId', (req, res, next) => {
    const id = req.params.studentId;
    if (id < 0 ){
        res.status(200).json({
            message: 'You entered an INVALID ID.',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:studentId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated student!'
    });
});

router.delete('/:studentId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted student!'
    });
});
module.exports=router;