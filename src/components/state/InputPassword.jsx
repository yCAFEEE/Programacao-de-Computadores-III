import { useState } from "react";


export default function InputPassword({placeHolder}){
    const [senha, setSenha] = useState("");

    function handleChange(e){
        setSenha(e.target.value);
    }

    return(
        <>
            <input type="password" placeholder={placeHolder} value={senha} onChange={handleChange}/>
            {(senha !== "") && <p>Senha digitada:</p>}
        </>
    );
}