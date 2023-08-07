import React, { useState, useEffect } from "react"
import {Link, useParams} from 'react-router-dom'
import "../Reddit/Reddit.css"
import "./Post.css"
import { timeAgoCalc } from "../../utilities/utilities"

export default function Post(){

    const [loaded, setLoaded] = useState(false)
    const [postData, setPostData] = useState([])
    const [commentsData, setCommentsData] = useState([])

    const {subreddit} = useParams()
    const {postId} = useParams()
    const {postTitle} = useParams()

    const getPostData = async () => {

        setLoaded(false)
    
        const response = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${postId}/${postTitle}.json`);
        
        const json = await response.json();
 
        setPostData(json[0].data.children[0].data);
        setCommentsData(json[1].data.children);
        setLoaded(true)

      }

      useEffect(() => {
        getPostData()
      },[])

      const comments = commentsData.map(comment => {
        return <div className="comment">
            <div className="comment-heading">
                <div className="comment-author">{comment.data.author}</div>
                <div className="comment-time">{timeAgoCalc(comment.data.created)}</div>  
            </div>
            <div className="comment-body">
                {comment.data.body}
            </div>
            <div className="comment-upvote">
                Upvotes: {comment.data.ups}          
            </div>
        </div>
      })

      console.log(postData)
      console.log(commentsData)
      

    return (
        <div className="reddit-container">
        {
            loaded?
            <>
                <div className="reddit-left">
                    <b>{postData.num_comments}</b>
                </div>
                <div className="reddit-right">
                    <div className="reddit-top">
                        {postData.thumbnail.includes(".jpg")?
                        <img className="thumbnail-img"src={postData.thumbnail}/>:
                        <div className="thumbnail-letter">{postData.subreddit[0].toUpperCase()}</div>
                        }
                        <p><b>{postData.subreddit_name_prefixed}</b></p>
                        <p>Posted by {postData.author}</p> 
                    </div>
                    
                    <h2>{postData.title}</h2>
                    {postData.url.includes(".jpg")&&<img src={postData.url} height="400px"/>}
                    {
                        commentsData?
                        <div>
                            Comments
                            {comments}
                        </div>:
                        "Loading Comments"
                    }   
                </div>
            </>:
            "Loading Data"
        }
    </div>
    )
}