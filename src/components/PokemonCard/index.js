import React from 'react';

const PokemonCard = (props) => {

    const getTypes = () => {
        let typesString = "";
        props.types.forEach( type => {
            typesString += type.type.name + ", "
        });
        return typesString;
    };

    return (
        <tr>
            <td>{ props.id }</td>
            <td>{ props.name }</td>
            <td><img src={ props.sprites !== undefined ? props.sprites.front_default : "" } alt="" width={ 100 } height={ 100 }/></td>
            <td>{ props.types !== undefined ? getTypes() : "" }</td>
            <td>{ props.height }</td>
            <td>{ props.weight }</td>
        </tr>
    )
};

export default PokemonCard;