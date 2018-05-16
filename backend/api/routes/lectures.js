const router = require('express').Router()
const path = require('path')
const SubjectTeacherMap = require('../../db').SubjectTeacherMap

// Add new Subject to the database
router.post('/:id/subjects/:s_Id/teachers/:t_Id', (req, res) => {
    let l_Id = req.params.id
    let s_Id = req.params.s_Id
    let t_Id = req.params.t_Id

    const SubjectTeacherObject = new SubjectTeacherMap({
        subjectId: s_Id,
        teacherId: t_Id,
        lectureId: l_Id
    });

    SubjectTeacherObject.save();

    res.send({
        sucess: true
    })
})

module.exports = router;