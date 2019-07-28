import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import PokemonCard from "../PokemonCard";

// const ListComponent = ({ modules }) => {

//     return (
//         <div>
//         {
//             modules.map( mod => <div>{ mod }</div> )
//         }
//         </div>
//     );
// };

// export default connect(state => ({ modules: state }))(ListComponent);

const ListComponent = ({ data }) => {

    // const [pokemons, setPokemons] = useState([])

    // const [pokeInput, setPokeInput] = useState("");

    // const handlePokeChange = (e) => {
    //     e.preventDefault();
    //     setPokeInput(e.target.value.toLowerCase());
    // };

    // const handleGetPoke = (e) => {
    //     e.preventDefault();
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`)
    //         .then(res => res.json())
    //         .then(data => {console.log(data); setPokemons([...pokemons, data])});
    // };


    return (

        <table className="table">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Name</th>
                    <th>Picture</th>
                    <th>Types</th>
                    <th>Height</th>
                    <th>Weight</th>
                </tr>
            </thead>
            <tbody>
            {
                data.map( poke => <PokemonCard { ...poke }/> )
            }    
            </tbody>
        </table>
    );
};

export default connect(state => ({ data: state.pokemons }))(ListComponent);