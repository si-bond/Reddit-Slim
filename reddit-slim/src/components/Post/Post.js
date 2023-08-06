import React, { useEffect } from "react"
import {Link, useParams} from 'react-router-dom'
import "./Post.css"

export default function Post(){

    const {subreddit} = useParams()
    const {postId} = useParams()
    const {postTitle} = useParams()

    const getPostData = async () => {
    
       // setLoaded(false)
    
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}/${postTitle}.json`);
        //const response = await fetch(`https://www.reddit.com/r/comics/comments/15js88u/aging_gracelessly.json`);
        
        const json = await response.json();
       // setLoaded(true)
       // setData(json.data.children);
        console.log(json)
        console.log("test")
      }

      useEffect(() => {
        getPostData()
      },[])
      

    return (
        <div className="reddit-container">
            
            <div className="reddit-left">
                <b>comments</b>
            </div>
            <div className="reddit-right">
                <div className="reddit-top">
                    Top details
                </div>
                
                <h2>title</h2>
                image
            </div>
            
        </div>
    )
}