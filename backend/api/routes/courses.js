const express= require('express');
const router = express.Router();
const path=require('path');

const Course = require('../../db').Course;
const Batch = require('../../db').Batch;
const Lecture = require('../../db').Lecture;
const SubjectTeacherMap = require('../../db').SubjectTeacherMap;
const Teacher = require('../../db').Teacher;
const Student= require('../../db').Student;

const Sequelize = require('sequelize');
const Op=Sequelize.Op;
const StudentBatchMap=require('../../db').StudentBatchMap;
// const courseRoutes= require('.api/routes/courses');

//for displaying all courses
router.get('/',(req,res,next)=>{
    // res.status(200).json({
    //     message:'GET request to /courses'
    //     //do something for get request
    // });
    Course.findAll({}).then((courses)=>{
        res.status(200).json({
            courses
        })
});
});
///Post REQUESTS

//creating Course
router.post('/',(req,res,next)=>{
    //adding a new course
    CourseName:req.query.CourseName;
    //since coursename is optional therefore ?coursename = > QUERY instead of BODY

    const courseObject = new Course({
        name:CourseName
    });
    
    courseObject.save();
    res.send({
        success:true
    })
})

//creating Batch
router.post('/:id/batches', (req, res) => {
    let url = req.path;
    let arr = url.split('/');
    console.log(arr)
    //odd place index will give ids
    //inserting Batch Table
    const cId = arr[1]
    const batchName = req.query.name

    const batchObject = new Batch({
        name: batchName,
        courseId: parseInt(cId)
    })

    batchObject.save()


    res.status(200).json({
        done: true
    })
})


//creating lecture

router.post('/:id/batches/:BId/lectures',(req,res,next)=>{
    //adding a new batch
  let url =req.path;
  let arr=url.split('/');
  console.log(arr);
  //arr={resourceName1 , id1,resourceName3,id2,....}
  //odd place indices will return id's
//   const cId=arr[1];
  const lname=req.query.name;
  const bId=req.params.BId;
  
  const lectureObject=new Lecture(
      {
          batchId:bId,
          name:lname
      }
  )
  lectureObject.save();
   
        res.status(200).json({
            success    :true
    })
})

//creating Lectures
router.post('/',(req,res,next)=>{
    //adding a new course
    CourseName:req.query.CourseName;
    //since coursename is optional therefore ?coursename = > QUERY instead of BODY

    const courseObject = new Course({
        name:CourseName
    });
    
    courseObject.save();
    res.send({
        success:true
    })

    res.status(201).json({
        message:'POST request to /courses',
        createdCourse:course
    });
});
 
// router.get('/:courseId', (req, res, next) => {
  
//         res.status(200).json({
//             message: 'Course Details',
//             CourseId:req.params.CourseId
//         });
// });

router.put('/:courseId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated course!'
    });
});

router.delete('/:courseId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted course!',
        CourseId:req.params.CourseId
    });
});
module.exports=router;
