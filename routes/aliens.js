const express = require('express')
const alien = require('../models/alien')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req, res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        req.send('Error '+ err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        req.send('Error '+ err)
    }
})

router.post('/', async(req, res) => {

    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.patch('/:id',async(req,res) =>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.send('Error '+ err)
    }
})

router.delete('/:id',async(req,res) =>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.sub = req.body.sub
        const a1 = await alien.remove()
        res.json(a1)
    }catch(err){
        res.send('Error '+ err)
    }
})

module.exports = router