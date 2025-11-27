import { useState } from "react";


export default function Label({ texto }){
    const [valor, setValor] = useState(texto);

    return(
        <label className="form-label">
            {valor}
        </label>
    );
}