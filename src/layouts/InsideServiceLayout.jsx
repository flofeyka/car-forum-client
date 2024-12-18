import {Link, Outlet} from "react-router-dom";
import {Button} from "@nextui-org/react";
import {useSelector} from "react-redux";

export default function InsideServiceLayout() {
    const {userData} = useSelector((state) => state.auth);
    return <div>
        <header className="flex justify-center fixed top-0 bg-[#111] w-screen z-10 items-center p-5">
            <div className="w-[75%] flex justify-between items-center">
                <Link to={"/"}>
                    <span className="text-3xl font-semibold">Автомобильный клуб</span>
                </Link>
                <span className="flex items-center gap-3 text-xl">
            <Link to={"/forum"} className="text-gray-400 hover:text-yellow-400">
              Форум
            </Link>
            <Link to={"/news"} className="text-gray-400 hover:text-yellow-400">
              Новости
            </Link>
            <Link to={"/lk"} className="text-gray-400 hover:text-yellow-400">
              Личный кабинет
            </Link>
                    {userData ? <Button color={"danger"}>
                        Выйти
                    </Button> : <a href={"/#register"}><Button>Войти</Button></a>}
          </span>
            </div>
        </header>
        <div className="mt-[12vh]">
            <Outlet/>
        </div>
    </div>
}