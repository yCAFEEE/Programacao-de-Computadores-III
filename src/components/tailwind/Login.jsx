import InputPassword from "./InputPassword.jsx";
import InputText from "./InputText.jsx";
import Button from "./Button.jsx";
import Label from "./Label.jsx";
import LabelTitle from "./LabelTitle.jsx";

export default function Login(){
    return(
        <div className="flex justify-center items-center h-screen w-screen bg-gray-100">
            <form className="bg-white p-8 rounded-lg shadow-md w-80">
                <LabelTitle texto="Login" />

                <div className="mb-4 flex flex-col">
                    <Label texto="Usuário:" />
                    <InputText placeholder="user..." />
                </div>

                <div className="mb-4 flex flex-col">
                    <Label texto="Senha:" />
                    <InputPassword placeholder="password..." />
                </div>

                <Button valor="Logar" />
            </form>
        </div>
    );
}