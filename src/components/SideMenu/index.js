import React, { useState } from 'react';

function SideMenu() {

    const [input, setInput] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setInput(event.target.value.toLowerCase());
    };

    const handleClick = (event) => {
        event.preventDefault();
    };

    const addPokemon = ({  }) => { return {
        type: "ADD_POKEMON",
    }};
    
    return (
        <nav className="nav">

            <input type="text"
                   onChange={ e => handleChange(e) }
                   value={ input }/>

            <button className="button"
                    onClick={ e => handleClick(e) }>
                Click
            </button>

        </nav>
    )
}

export default SideMenu;