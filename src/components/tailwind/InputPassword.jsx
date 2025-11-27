import { useState } from "react";


export default function InputPassword({placeHolder}){
    const [senha, setSenha] = useState("");

    function handleChange(e){
        setSenha(e.target.value);
    }

    return(
        <>
            <input 
                type="password" 
                placeholder={placeHolder} 
                value={senha} 
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:border-green-600 focus:ring-1 focus:ring-green-400 outline-none"
            />
            {(senha !== "") && <p>Senha digitada: {senha}</p>}
        </>
    );
}