import React, { useState } from 'react'
import "./Cities.css"
import "./Button.css"
const citiesArr = [
    {
        id: 1,
        name: 'Рівне',
        population: 247356
    },
    {
        id: 2,
        name: 'Дубно',
        population: 38491
    },
    {
        id: 3,
        name: 'Острог',
        population: 31021
    }
];

export default function Cities() {

    const [cities, setCities] = useState(citiesArr);

    const add = () => {
        const newCity = { id: 4, name: 'Квасилів', population: 8167 };

        setCities([...cities, newCity]);
    }

    const reset = () => {
        setCities(citiesArr);
    }

    return (
        <div className='Cities'>
            <h1>Cities List</h1>
            <ul>
                {cities.map((i, index) =>
                    <li key={i.id}>[{i.id}] - {i.name} - Населення: {i.population}</li>
                )}
            </ul>
            <button onClick={add}>Add New city</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}