const mongoose=require('mongoose')

const articlesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:'Please enter a title',

    },
    short_description:{
        type:String,
        required:true,
    },
    image: {
        type: String, 
        required: true, 
      },
      href: {
        type: String, 
        required: true, 
      }
})

module.exports=mongoose.model('Article', articlesSchema )