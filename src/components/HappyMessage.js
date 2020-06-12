import React from "react"



const HappyMessage = () => {
    const quotes = ['good day', 'smile', 'be positive', 'be kind', 'your beautiful']
    function randomQuotes(quotes){
        let index =Math.floor(Math.random()* quotes.length)
        return quotes[index];
    }
    return <p class='message'>{randomQuotes(quotes)}</p>
} 


export default HappyMessage