import RegisterForm from "../Forms/RegisterForm";
import LoginForm from "../Forms/LoginForm";
import {useState} from "react";

export default function Auth() {
    const [authMode, setAuthMode] = useState("register");

    return <footer id={"register"} className="flex justify-center p-10 h-[60vh]">
        <div className={"w-[60%] flex flex-col gap-3 items-center"}>
            <div className={"font-semibold text-4xl text-center"}>Присоединяйтесь к автомобильному клубу.</div>
            {authMode === "register" ? <RegisterForm/> : <LoginForm/>}
            <div>Либо <span
                className={"text-primary cursor-pointer"}
                onClick={(prev) => setAuthMode(prev => prev === "register" ? "login" : "register")}>{authMode === "register" ? "Войти" : "Зарегистрироваться"}</span>
            </div>
        </div>
    </footer>
}