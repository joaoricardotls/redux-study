import React from "react";
import { Provider } from "react-redux";
import SideMenu from "./components/SideMenu";
import ListComponent from "./components/ListComponent"
import store from "./store";
 
export default function App() {

    return (

        <div className="container">

            <Provider store={ store }>

                <SideMenu/>

                <ListComponent/>

            </Provider>

        </div>

    );
};