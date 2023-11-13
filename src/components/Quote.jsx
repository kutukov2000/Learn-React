import { useState } from "react";
import "./Button.css";

function Quote() {
    const quotesArray = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    ];

    const date = new Date();
    const [quote, setQuote]=useState(quotesArray[0]);

    const showRandomQuote = () => {
        const randomQuoteIndex = Math.floor(Math.random() * quotesArray.length);

        setQuote(quotesArray[randomQuoteIndex]);
    }
    
    return (
        <div>
            <h1>Quote of the day</h1>
            <div>
                <q>{quote.text}</q>
                <p>{quote.author}</p>
                <p>{date.toLocaleDateString('en-us')}</p>
            </div>
            <div>
                <button onClick={showRandomQuote}>Show random quote</button>
            </div>
        </div>
    );
}

export default Quote;