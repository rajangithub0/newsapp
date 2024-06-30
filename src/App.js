import { useEffect, useState } from 'react';
import './App.css';
import News from './News';

function App() {

  let [articles,setArticles]=useState([])
  let [category,setCategory]=useState('animal')

  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-06-28&apiKey=dff5c876f5974b6d8ec1303c1dafdbba`)
    .then((response)=>response.json())
    .then((news)=>{
      setArticles(news.articles);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[category])
  return (
    <div className="App">
      <header>
        <h1>NEWS APP</h1>
        <input type='text' onChange={(event)=>{
        if(event.target.value!==""){
          setCategory(event.target.value)
        }else{
          setCategory("animal")
        }
          }} placeholder='Search News'/>
        
      </header>
      
      <section className='news-articles'>
        {
          articles.length!==0?
        
        articles.map((article)=>{
          return(<News article={article} />)
        }):
        <h3>No News Found For Searching Text</h3>
      }
      
      
      </section>
    </div>
  ); 
}

export default App;
