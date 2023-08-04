import React from "react"
import Reddit from './Reddit/Reddit'

export default function List({data}){

    let reddits = "Loading data!"

    if(data){

        reddits = data.map(reddit => {
            return (
                <Reddit 
                    data={reddit.data} 
                    key={reddit.data.id}
                />
            )
          })
    }

    return (
        <div>
            {reddits}
        </div>
    )
}