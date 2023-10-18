import React from 'react'
import { getHeroesbyPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = getHeroesbyPublisher(publisher);
    
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {heroes.map( (hero) => (
            <HeroCard key={hero.id} {...hero}/> // => {...hero} sirve para desestructurar al hero, en lugar de estar colocando cada una de sus propiedades por separado
        ))}

    </div>

  )
}
