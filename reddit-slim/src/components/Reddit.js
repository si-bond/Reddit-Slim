import React from "react"

export default function Reddit({data}){

    return (
        <div className="reddit-container">
            <div className="reddit-left"></div>
            <div className="reddit-right">
                <h2>{data.title}</h2>
                <img src={data.thumbnail} />
            </div>
            
        </div>
    )
}