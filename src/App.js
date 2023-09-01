import "./sass/main.scss"
import React, { useEffect, useState } from "react";
import Post from "./Post.jsx";
import axios from "axios";

function App() {

  const [loginDialog, useLoginDialog] = useState(false)
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
      <dialog className="box" open={loginDialog}>
        <div className="login" >
        <button className="close" onClick={() => {useLoginDialog(!loginDialog)}}></button>
        <div className="animatedBox"></div>
        <form>
          <h2>Sign in</h2>
          <div className="inputBox">
            <input type="text" required="required"></input>
            <span className="placeholder">Username</span>
            <span className="line"></span>
          </div>
          <div className="inputBox">
            <input type="password" required="required"></input>
            <span className="placeholder">Password</span>
            <span className="line"></span>
          </div>
          <input type="submit" value="login"></input>
        </form>
        </div>
      </dialog>
      <div className="header">
        <button className="button" onClick={() => {useLoginDialog(!loginDialog)}}>Login</button>
      </div>
      
      
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
