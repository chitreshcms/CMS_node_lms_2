const express= require('express');
const router = express.Router();
const path = require('path')

const Subject = require('../../db').Subject
const SubjectTeacherMap = require('../../db').SubjectTeacherMap
const Teacher = require('../../db').Teacher
const Sequelize = require('sequelize')
const Op = Sequelize.Op;

// const subjectRoutes= require('.api/routes/subjects');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'GET request to /subjects'
    });
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'POST request to /subjects'
    });
});
//get requests for ids
router.get('/:subjectId', (req, res, next) => {
    const id = req.params.subjectId;
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

router.put('/:subjectId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated subject!'
    });
});

router.delete('/:subjectId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted subject!'
    });
});
module.exports=router;