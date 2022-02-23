import React from 'react';


const Header = (props) => {

    return (
        <div className=''>
            <h1><span class="nes-text is-warning">Pokemon Api</span></h1>
            <p className="nes-balloon from-left nes-pointer">
                Total de pokemones <a href="/" className="nes-badge">
                    <span className="is-success"> {props.total}</span>
                </a>
            </p>


            <br></br>
            <i class="nes-pokeball Rotar"></i>
        </div>
    )

}

export default Header;