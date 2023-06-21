import React , { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe'


function App() {
  const APP_ID = 'dc34792b';
  const APP_KEY = '3eab1a651f78f58e8b394f905f3efa21'

  const [search,setSearch] = useState('')
  const [query,setQuery] = useState('momo')
  const [dishes,setDishes] = useState([])
  // console.log("Start")

  useEffect(()=>{
      async function getData(){
      let res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
      let response = await res.json()
      setDishes(response.hits)
    }
    // console.log("End")
    getData()
   },[query])

  const submitHandler = (e) =>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
    }

  return <div className='App'>
    {/* {console.log("UI")} */}
     <form onSubmit={submitHandler} className="search-form">
    <input type="text"
     className='search-bar' 
     onChange={e => setSearch(e.target.value)} 
     value={search}/>
    <button type="submit" className='search-button'>Search</button>
  </form>
  { dishes.map((item,idx) => <Recipe recipeList={item}  key={idx}/>) }
  </div>
}

export default App;
