import { useState } from "react";


export default function Button({ valor }){
    const [texto, setTexto] = useState(valor);

    function handleClick(){
        setTexto("tá clicado!!");
    }

    return(
        <button className="form-btn" onClick={handleClick}>
            {texto}
        </button>
    );
}