const express=require('express')
const router=express.Router()
const article=require('../schemas/schema')

//Getting all articles
router.get('/', async (req,res) => {
    try {
        const articles=await article.find()
        res.json(articles)
    } catch (err) {
        res.status(500).json({message:error.message})
    }
   
})
 

//Getting One article 
router.get('/:id', (req,res) => {
res.send(req.param.id)
})
//Creating one article
router.post('/', async (req,res) => {
  const Article=new article({
    title:req.body.title,
    short_description:req.body.short_description
  })

  try {
    const newArticle=await Article.save()
    res.status(201).json(newArticle)
  } catch (err) {
    res.status(400).json({message:err.message})
  }
})
//Updating one article
router.patch('/:id', (req,res) => {

}) 

//Deleting one 
router.delete('/:id', (req,res) => {

}) 

module.exports=router