import "./sass/main.scss"
import React, { useEffect, useState } from "react";
import Post from "./Post.jsx";
import axios from "axios";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      await axios.get("https://64eb93a0e51e1e82c577802a.mockapi.io/api/blog/posts").then(response => {
        setData(response.data)
      })
    }
    getData()
  }, []) 
  
  return (
    <div className="app">
      <div className="Hero">
        <div className="top">
          <div className="img"></div>
        </div>
        <div className="Dec-block">
          <div className="dec-l"></div>
          <h1 className="text">Hello</h1>
          <div className="dec-r"></div>
        </div>
      </div>
      <div className="Posts">
        {data.map((post)=>(
          <Post text={post.description} title={post.title} img={post.img} key={post.id} id={post.id}></Post>
        ))}
      </div>
    </div>
  );
}

export default App;
