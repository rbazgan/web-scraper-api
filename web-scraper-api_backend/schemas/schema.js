const mongoose=require('mongoose')

const articlesBlog=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    short_description:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Article', articlesBlog )