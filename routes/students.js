const express = require('express')
const router = express.Router()
const Student = require('../models/student')

router.get('/', async(req, res) =>{
    try{
        const students =await Student.find()
        res.json(students)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req, res) =>{
    try{
        const student =await Student.findById(req.params.id)
        res.json(student)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req,res) => {
    const student = new Student({
        name: req.body.name,
        class: req.body.class,
        studentID: req.body.studentID,
        gender: req.body.gender
    })

    try{
        const a1 = await student.save()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})

router.patch('/:id', async(req,res) =>{
    try{
        const student = await Student.findById(req.params.id)
        student.class = req.body.class
        const a1 = await student.save()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})

router.delete('/:id', async(req,res) =>{
    try{
        const student = await Student.findById(req.params.id)
        student.class = req.body.class
        const a1 = await student.delete()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})
module.exports = router