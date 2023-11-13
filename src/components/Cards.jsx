import React, { useState } from 'react'
import './Cards.css'

export default function Cards() {
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['♠', '♣', '♥', '♦'];

    const [cards, setCards] = useState([{ value: 'K', suit: '♥' }]);

    const generateCard = () => {
        if(cards.length === 52){
            return;
        }
        let newCard;

        do {
            let valueIndex = Math.floor(Math.random() * values.length);
            let suitIndex = Math.floor(Math.random() * suits.length);

            newCard = { value: values[valueIndex], suit: suits[suitIndex] };
        } while (cards.some(card => card.value === newCard.value && card.suit === newCard.suit));
        
        setCards([...cards, newCard]);
    }

    const sortCards = () => {
        const sortedCards = [...cards];
    
        sortedCards.sort((a, b) => {
            const valueOrder = values.indexOf(a.value) - values.indexOf(b.value);
            if (valueOrder !== 0) {
                return valueOrder;
            }
            return suits.indexOf(a.suit) - suits.indexOf(b.suit);
        });
    
        setCards(sortedCards);
    };
    

    return (
        <div>
            <div className='cardsCollection'>
                {cards.map((card, index) =>
                    <div className={'card '+(card.suit==='♥' || card.suit==='♦'?'red':'')} key={index}>
                        <div className="card-inner">
                            <div className="card-value">{card.value}</div>
                            <div className="card-suit">{card.suit}</div>
                        </div>
                    </div>
                )}
            </div>
            <button onClick={generateCard}>Generate new card</button>
            <button onClick={sortCards}>Sort</button>
        </div>
    )
}