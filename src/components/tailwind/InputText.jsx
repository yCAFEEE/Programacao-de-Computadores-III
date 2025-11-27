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
            <input 
                type="text" 
                placeholder={placeHolder} 
                value={valor} 
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:border-blue-600 focus:ring-1 focus:ring-blue-400 outline-none"
                style={{border: erro ? "2px solid #bf4141" : undefined}}
            />
            {erro && <p style={{color: "#bf4141"}}>Campo não pode estar vazio!</p>}
        </>
    );
}