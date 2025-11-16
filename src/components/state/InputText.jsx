import { useState } from "react";

export default function InputText({placeHolder}){
    const [valor, setValor] = useState("");
    const [erro, setErro] = useState(false);

    function handleChange(e){
        const novoValor = e.target.value;
        setValor(novoValor);
        setErro(novoValor.trim() === "");
    }

    return(
        <>
            <input type="text" placeholder={placeHolder} value={valor} onChange={handleChange} />
            {erro && <p>Campo não pode estar vazio!</p>};
        </>
    );
}