import React, {useEffect,useState} from 'react';
import './App.css';

function App() {
  const [article, setArticle] = useState([])
  useEffect(() => {
  fetch('/api')
  .then((res)=>{return res.json()})
  .then((data)=> {setArticle(data.payloads)})
},[] );
  return (
    <>
    {
    article.map((value,index) => {
      return (
      
        <>
        <div className="title">
         <h1>From the blog</h1>
        </div>
        <div className="subtitle">
        <p>Learn how to grow your business with our expert advice.</p>
        </div>
        <div>
        <img className="img" src={value.image} alt="loading" />
        <p>{value.title}</p>
        <p>{value.short_description}</p>
        </div>
        </>
      )
    })
  }
    </>
  )
}

export default App
