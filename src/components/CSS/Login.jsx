import InputPassword from "./InputPassword.jsx";
import InputText from "./InputText.jsx";
import Button from "./Button.jsx";
import Label from "./Label.jsx";
import LabelTitle from "./LabelTitle.jsx";

import "./Login.css";

export default function Login(){
    return(
        <div className="login-container">
            <form className="login-form" >
                <LabelTitle texto="Login" />

                <div className="form-group">
                    <Label texto="Usuário" /><br />
                    <InputText placeHolder="usuário" /><br />
                </div>

                <div className="form-group">
                    <Label texto="Senha" /><br />
                    <InputPassword placeHolder="senha" /><br />
                </div>

                <Button valor="Login" />
            </form>
        </div>
    );
}