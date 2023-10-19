const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');


app.use(cors({ origin: true }));
app.use(express.json())

DB_URL="mongodb://0.0.0.0/scrapers";
mongoose.connect(DB_URL);
const db=mongoose.connection;
db.on('error', (error) => {console.error(error)}) 
db.once('open', () => {console.log('Connected to Database')})


const scrapersRouter=require('./routes/web-scrapers')
app.use('/web-scrapers', scrapersRouter)

app.get('/', (req, res) => {
    res.send("Hello API"); 
})

app.get('/api', (req, res) => {
    res.json(
        {
            "payloads": [
                {
                    "title": "The Joys of Gardening",
                    "short_description": "Explore the enriching world of gardening and discover its positive impact on mood and well-being.",
                    "image":"https://wsa-test.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgarden.8d6b6c5f.webp&w=3840&q=75",
                    "href": "https://wsa-test.vercel.app/blog/the-joys-of-gardening",
                    "sentiment": "positive|neutral|negative"
                    }
                    
            ]
        }
    )
})
app.listen(5000, ()=> console.log('Web-scraper-server has started')) 