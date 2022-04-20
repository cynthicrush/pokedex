import React from 'react';

const POKEMON_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';

function Pokecard(props) {
    let imageSrc = `${POKEMON_API}/${props.id}.png`;

    return (
        <div className='Pokecard'>
            <div className='Pokecard-name'>{props.name}</div>
            <img className='Pokecard-image' src={imageSrc} />
            <div className='Pokecard-type'>{props.type}</div>
            <div className='Pokecard-exp'>{props.exp}</div>
        </div>
    )
}

export default Pokecard;
