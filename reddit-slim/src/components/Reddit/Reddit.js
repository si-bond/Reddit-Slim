import React from "react"
import { Link } from "react-router-dom";
import "./Reddit.css"

export default function Reddit({data}){

    return (
        <div className="reddit-container">
            <div className="reddit-left">
                <b>{data.num_comments}</b>
            </div>
            <div className="reddit-right">
                <div className="reddit-top">
                    {data.thumbnail.includes(".jpg")?
                    <img className="thumbnail-img"src={data.thumbnail}/>:
                    <div className="thumbnail-letter">{data.subreddit[0].toUpperCase()}</div>
                    }
                    <p><b>{data.subreddit_name_prefixed}</b></p>
                    <p>Posted by {data.author}</p> 
                </div>
                
                <h2><Link to={`post/${data.subreddit}/comments/${data.id}/${data.title}`}>{data.title}</Link></h2>
                {data.url.includes(".jpg")&&<img src={data.url} height="400px"/>}
            </div>
            
        </div>
    )
}