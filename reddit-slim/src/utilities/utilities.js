function timeAgoCalc(timeStamp){

    const currentdateTime = Math.floor(new Date().getTime()/1000.0)

    const timeDifference = currentdateTime - timeStamp
    const timeDifferenceHours = (timeDifference / (60 * 60)).toFixed(0)

    if(timeDifferenceHours==1)
    {
        return `${timeDifferenceHours} hour ago`
    } 
    else if (timeDifferenceHours<24)
    {
        return `${timeDifferenceHours} hours ago`
    } 
    else {
        const timeDifferenceDays = (timeDifferenceHours / 24 ).toFixed(0)

        if(timeDifferenceDays==1){
            return `${timeDifferenceDays} day ago`
        }
        else {
            return `${timeDifferenceDays} days ago`
        }

    }

    
}

export { timeAgoCalc }