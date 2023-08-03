import React from "react"
import Reddit from './Reddit'

export default function List({data}){

    let reddits = "Loading data!"

    if(data){

        reddits = data.map(reddit => {
            return (
                <Reddit 
                    data={reddit.data} 
                />
            )
          })
        console.log(data)
    }

    return (
        <div>
            {reddits}
        </div>
    )
}