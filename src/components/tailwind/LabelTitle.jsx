import { useState } from "react";


export default function LabelTitle({ texto }){
    const [valor, setValor] = useState(texto);

    return(
        <label className="block text-2x1- font-bold text-blue-800 mb-4 text-center">
            <h1>
                {valor}
            </h1>
        </label>
    );
}