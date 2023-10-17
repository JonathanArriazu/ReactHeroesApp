import React from 'react'
import { getHeroesbyPublisher } from '../helpers/getHeroesByPublisher'

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesbyPublisher(publisher);
    
  return (
    <ul>
        {heroes.map( (hero) => (
            <li 
                key={hero.id}
            >
                {hero.superhero}
            </li>
        ))}

    </ul>

  )
}
