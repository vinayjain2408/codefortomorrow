import './App.css';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import PostList from "./component/PostList"
import ViewToggle from './component/ViewToggle';
import Pagination from "./component/Pagination"
import FeedbackForm from "./component/FeedbackForm"
export const ContextStore = createContext();
function App() {
  const [postData , setPostData] = useState([])
  const [loading , setloading] = useState(true)
  const [currentPage , setCurrentPage] = useState(1)
  const [viewMode ,setViewMode] = useState("list")

  const fetchData = async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setPostData(response?.data)
  }

  useEffect (()=>{
    fetchData()
  },[])

  const removeCard = (id)=>{
    setPostData((prev)=>{
      const newData = prev.filter(post => post.id !== id);
      return newData.length % 6 === 0 ? newData :  [... newData , prev[newData.length]];
    })
  }
  return (
    <ContextStore.Provider value={{postData, setPostData ,currentPage ,setCurrentPage ,viewMode ,setViewMode ,removeCard}}>
      <div className="app"> 
        <div className='container'>
        <div className='leftSide'>
        <ViewToggle />
        <FeedbackForm />
        </div>
        <div className='rightSide'>
        <PostList />
        <Pagination />
        </div>
        </div>
        
      
      </div>
      

    </ContextStore.Provider>
  );
}

export default App;

