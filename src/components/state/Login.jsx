import InputPassword from "./InputPassword.jsx";
import InputText from "./InputText.jsx";

export default function Login(){
    return(
        <>
            <InputText placeHolder="usuário" />
            <InputPassword placeHolder="senha" />
        </>
    );
}