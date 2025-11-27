import { useState } from "react";


export default function LabelTitle({ texto }){
    const [valor, setValor] = useState(texto);

    return(
        <label className="form-label-title">
            <h1>
                {valor}
            </h1>
        </label>
    );
}