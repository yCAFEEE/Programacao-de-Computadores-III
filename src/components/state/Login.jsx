import InputPassword from "./InputPassword.jsx";
import InputText from "./InputText.jsx";
import Button from "./Button.jsx";
import Label from "./Label.jsx";

export default function Login(){
    return(
        <>
            <Label texto="Usuário" /><br />
            <InputText placeHolder="usuário" /><br />
            <Label texto="Senha" /><br />
            <InputPassword placeHolder="senha" /><br />
            <Button valor="clica aqui!" />
        </>
    );
}