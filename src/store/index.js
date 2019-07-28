import { createStore } from "redux";

const reducer = () => {return {
    pokemons: []
}}

const store = createStore(reducer);

export default store;