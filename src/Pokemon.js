import React from 'react';
import { useState, useEffect } from 'react'
import { obtenerHabilidad } from './funciones';

const Pokemon = (props) => {

    const front_default = props.poke.sprites.front_default;
    const back_default = props.poke.sprites.back_default;
    const front_shiny =  props.poke.sprites.front_shiny;
    const back_shiny = props.poke.sprites.back_shiny;
    const id = props.poke.id
    
    const [habilidad, setHabilidad] = useState(null)
    const [sprite, setSprite] = useState(front_default)
    const [btnSprite, seBtnSprite] = useState('back')
    const [btnShiny, setBtnShiny] = useState('shiny')

    
    

    useEffect(() => {
        setSprite(front_default)
        setBtnShiny('shiny')
        seBtnSprite('back')
        
        obtenerHabilidad(id, setHabilidad)
    }, [id, front_default])

    const changeSprite = () => {
        if (sprite === front_default) {
            setSprite(back_default)
            seBtnSprite('front')
        } else if (sprite === front_shiny) {
            setSprite(back_shiny)
            seBtnSprite('front')
        } else if (sprite === back_shiny) {
            setSprite(front_shiny)
            seBtnSprite('back')
        } else {
            setSprite(front_default)
            seBtnSprite('back')
        }

    }

    const changeSpriteShiny = () => {
        if (sprite === front_default) {
            setSprite(front_shiny)
            setBtnShiny('normal')
        } else {
            setSprite(front_default)
            setBtnShiny('shiny')
        }
    }

    return (
        <div className='nes-container  with-title'>
            <p className='order title'>nº{props.poke.order}</p>
            <h2>{props.poke.name}</h2>
            <div className='pokedex_tops'>
                <img src={sprite} alt="" />
            </div>
            <button className='nes-btn' onClick={() => changeSprite()} >{btnSprite}</button>
            <button className='nes-btn' onClick={() => changeSpriteShiny()} >{btnShiny}</button>

            <div className=''>
                <div class="nes-container with-title is-left stats">
                    <p class="title">tipo</p>
                    <p>{
                        props.poke.types.map(typo => (
                            typo.type.name + ' '
                        ))
                    }</p>
                </div>
                <div className='nes-container with-title is-left stats'>
                    <p class="title">Alt.</p>
                    <p>Alt. {props.poke.height} m</p>

                </div>
                <div className='nes-container with-title is-left stats'>
                    <p class="title">Peso</p>
                    <p>Peso {props.poke.weight} kg</p>
                </div>
            </div>
            <div className='nes-container is-rounded is-dark stats'>
                <p>{habilidad !== null ? habilidad.flavor_text : ' '}</p>
            </div>
        </div>
    )
}

export default Pokemon;




