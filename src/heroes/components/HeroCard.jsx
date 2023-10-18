import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({
    id, 
    superhero, 
    publisher, 
    alter_ego, 
    first_apperance, 
    characters
}) => {

    const heroImageUrl = `/assets/heroes/${id}.jpg`
        
    return (
        <div className="col">
            <div className="card">

                <div className='row no-glutters'>

                    <div className="col-4">
                        <img src={ heroImageUrl } className='card-img' alt={ superhero } />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className='card-title'>{ superhero }</h5>
                            <p className='card-text'>{ alter_ego }</p>
                            <p>
                                { (alter_ego !== characters) && (<p>{ characters }</p>) }
                            </p>
                            <p className='card-text'>
                                <small className='text-muted'>{ first_apperance }</small>
                            </p>

                            <Link to={`/hero/${id}`}> Ver más... </Link>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
