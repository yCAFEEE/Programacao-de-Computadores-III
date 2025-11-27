import React from "react";

export default class Labelln extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valor: props.texto
        };
    }

    render(){
        return(
            <h1>{this.state.valor}</h1>
        );
    }
}