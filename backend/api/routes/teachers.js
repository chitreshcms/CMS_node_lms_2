const express= require('express');
const router = express.Router();

// const teacherRoutes= require('.api/routes/teachers');

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'GET request to /teachers'
    });
});
router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'POST request to /teachers'
    });
});

router.get('/:teacherId', (req, res, next) => {
    const id = req.params.teacherId;
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

router.patch('/:teacherId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated teacher!'
    });
});

router.delete('/:teacherId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted teacher!'
    });
});
module.exports=router;