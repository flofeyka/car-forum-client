import {useSelector} from "react-redux";
import {Button} from "@nextui-org/react";
import {Link} from "react-router-dom";
import Auth from "./Auth/Auth";
import Reviews from "./Reviews/Reviews";
import Advantages from "./Advantages/Advantages";
import About from "././About/About";
import Welcome from "./Welcome/Welcome";

export default function Landing() {
    const {userData} = useSelector((state) => state.auth);


    return <div className="flex flex-col items-center bg-[#111] text-white">
        <header className="flex justify-center fixed top-0 bg-[#111] w-screen z-[9999] items-center p-5">
            <div className="w-[75%] flex justify-between items-center">
                <span className="text-3xl font-semibold">Автомобильный клуб</span>
                <span className="flex gap-3 text-xl items-center">
            <a href="/#about" className="text-gray-400 hover:text-yellow-400">
              О проекте
            </a>
            <a href="/#best" className="text-gray-400 hover:text-yellow-400">
              Преимущества
            </a>
            <a href="/#reviews" className="text-gray-400 hover:text-yellow-400">
              Отзывы
            </a>
            <a href="/forum" className="text-gray-400 hover:text-yellow-400">
              Форум
            </a>
                    {userData ? <Link to={"/lk"}><Button>В личный кабинет</Button></Link> :
                        <a href="/#register" className="text-gray-400 hover:text-yellow-400">
                            Оставить заявку
                        </a>}
          </span>
            </div>
        </header>

        <main className="w-full flex flex-col gap-5">
            <Welcome/>
            <About/>
            <Advantages/>
            <Reviews/>
        </main>
        {!userData && <Auth/>}
    </div>
}