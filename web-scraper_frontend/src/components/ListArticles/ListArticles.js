import React, {useEffect,useState} from 'react';
import './ListArticles.css';

const ListArticles = () => {
  const [article, setArticle] = useState([])
  useEffect(() => {
  fetch('/api')
  .then((res)=>{return res.json()})
  .then((data)=> {setArticle(data.payloads)})
},[] );
  return (
    <div>
    <div className="title">
         <h1>From the blog</h1>
        </div>
        <div className="subtitle">
        <p>Learn how to grow your business with our expert advice.</p>
        </div> 
        <div className="large-container">
    {
    article.map((value,index) => {
      return (
        <div className="container">
          <div className="container-article">
        <a href={value.href}><img className="imagine" src={value.image} alt="loading" /></a><br />
        <h3 className="value-title">{value.title}</h3> <br / >
        <p className="value-short-description">{value.short_description}</p> <br/>
        </div>
        </div>
  
      )
    })
  } 
  </div>
    </div>
  )
}

export default ListArticles

