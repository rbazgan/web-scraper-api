const express=require('express')
const app=express()
const mongoose=require('mongoose')

DB_URL="mongodb://0.0.0.0/scrapers";
mongoose.connect(DB_URL);
const db=mongoose.connection;
db.on('error', (error) => {console.error(error)}) 
db.once('open', () => {console.log('Connected to Database')})

app.use(express.json())

const scrapersRouter=require('./routes/web-scrapers')
app.use('/web-scrapers', scrapersRouter)
 
app.listen(3000, ()=> console.log('Web-scraper-server has started')) 