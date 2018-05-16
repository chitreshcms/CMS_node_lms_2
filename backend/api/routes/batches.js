const router = require('express').Router()
const path = require('path')
const Batch = require('../../db').Batch
const Course = require('../../db').Course

router.get('/:id', (req, res) => {
    let batchId = parseInt(req.params.id);
    // console.log("i am here" + typeof(teacherId));
    Batch.findById(batchId)
    .then(batch => {
        res.json(batch);
    })
})

router.get('/', (req, res) => {
    Batch.findAll({
    }).then((batchList) => {
        res.json(batchList);
    })
})
.post('/', (req, res) => {
    
    let courseId = parseInt (req.query.courseId);
    let batchName = req.query.batchName;
    console.log( courseId +": and batch =>" + batchName)
    Course.findOne({
        where: {
            id: courseId
        }
    }).then((course) => {
        Batch.create({
            name : batchName
        }).then((batch) => {
            batch.setCourse(course, { save: false });
            batch.save();
            res.status(201).send(batch);
        }).catch(error => {
            res.send(501).send({
                error: "could not create the batch"
            })
        })
    }).catch((err) => {
        res.send(501).send({
            error: "could not find course"
        })
    })
})

module.exports = router