import React from "react"
import "./Reddit.css"

export default function Reddit({data}){

    return (
        <div className="reddit-container">
            <div className="reddit-left">
                {data.num_comments}
            </div>
            <div className="reddit-right">
                <h2>{data.title}</h2>
                {data.thumbnail.includes(".jpg")&&<img src={data.thumbnail} />}
            </div>
            
        </div>
    )
}