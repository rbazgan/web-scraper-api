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
                    "sentiment": function calculateSentiment(sentimentResult) {
                        if (sentimentResult > 0) {
                          return 'Positive';
                        } else if (sentimentResult < 0) {
                          return 'Negative';
                        } else {
                          return 'Neutral';
                        }
                      }
                    }, 

                    {
                    "title": "The Challenges of Urban Living",
                    "short_description": "A candid look at the challenges of urban living, with insights into coping strategies.",
                    "image":"https://wsa-test.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Furban.b1d13747.webp&w=3840&q=75",
                    "href":"https://wsa-test.vercel.app/blog/the-challenges-of-urban-living",
                    "sentiment": function calculateSentiment(sentimentResult) {
                            if (sentimentResult > 0) {
                              return 'Positive';
                            } else if (sentimentResult < 0) {
                              return 'Negative';
                            } else {
                              return 'Neutral';
                            } 
                          }
                },

                {   "title": "The Radiant Days of Summer",
                "short_description": "Drive into the vibrant and joyful moment that the summer season brings to our lives.",
                "image":"https://wsa-test.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsummer.8f9285fa.webp&w=1920&q=75",
                "href":"https://wsa-test.vercel.app/blog/the-radiant-days-of-summer",
                "sentiment": function calculateSentiment(sentimentResult) {
                    if (sentimentResult > 0) {
                      return 'Positive';
                    } else if (sentimentResult < 0) {
                      return 'Negative';
                    } else {
                      return 'Neutral';
                    }
                  }

                },

                {   
                "title": "Neutral Observations on Modern Art",
                "short_description": "An unbiased exploration of modern art, inviting readers to form their own opinions.",
                "image":"https://wsa-test.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fart.038e828f.webp&w=1920&q=75",
                "href":"https://wsa-test.vercel.app/blog/neutral-observations-on-modern-art",
                "sentiment": function calculateSentiment(sentimentResult) {
                    if (sentimentResult > 0) {
                      return 'Positive';
                    } else if (sentimentResult < 0) {
                      return 'Negative';
                    } else {
                      return 'Neutral';
                    }
                  }

                },
                {   
                    "title": "The Disappointing Reality of Junk Food",
                    "short_description": "A critical view of the fast-food industry, discussing its negative health and environmental impacts.",
                    "image":"https://wsa-test.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjunk-food.df597761.webp&w=1920&q=75",
                    "href":"https://wsa-test.vercel.app/blog/neutral-observations-on-modern-art",
                    "sentiment": function calculateSentiment(sentimentResult) {
                        if (sentimentResult > 0) {
                          return 'Positive';
                        } else if (sentimentResult < 0) {
                          return 'Negative';
                        } else {
                          return 'Neutral';
                        }
                      }
    
                    }

                    
                    
            ]
        }
    )
})
app.listen(5000, ()=> console.log('Web-scraper-server has started')) 