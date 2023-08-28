import React, { useEffect, useState } from 'react'
import "./sass/main.scss"
import { useParams } from 'react-router'
import { useNavigate } from "react-router-dom"

export default function PostPage() {
    const {postID} = useParams()
    const navigate = useNavigate()
    const [post, usePosts] = useState({})
    
    useEffect(() => {
        async function GetData() {
          console.log(postID)
          fetch("https://64eb93a0e51e1e82c577802a.mockapi.io/api/blog/posts/" + postID)
            .then(res => res.json())
            .then(data => usePosts(data))
          console.log(post)
        }
        GetData()
      }, [])
  return (
    <div className='app'>
      <div className='Post-page'>
        <div className='top'>
          <button className='back' onClick={() => {navigate("../../")}}>Back</button>
        </div>
        <div className='Hero-post'>
          <img className='Hero-post-img' src={post.top_img}/>
        </div>
        <h1 className='title'>{post.title}</h1>
        <div className='body' dangerouslySetInnerHTML={{__html: post.body}}></div>
      </div>
    </div>
  )
}
