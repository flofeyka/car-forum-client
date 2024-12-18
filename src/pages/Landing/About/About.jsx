export default function About() {
    return <div id={"about"} className="flex flex-col h-screen items-center gap-3">
        <div className="text-5xl my-4 font-semibold mt-[100px]">
            Добро пожаловать в Автомобильный клуб
        </div>
        <div className="text-2xl">
            Ваш портал в мир автолюбителей и событий
        </div>
        <div className="flex gap-3">
            <img
                alt="car-road"
                src="/images/car-road.png"
                className="rounded-xl w-[30vw] h-[50vh]"
            />
            <img
                alt="car-garage"
                src="/images/car-garage.png"
                className="rounded-xl w-[30vw] h-[50vh]"
            />
            <img
                alt="car-red"
                src="/images/car-red.png"
                className="rounded-xl w-[30vw] h-[50vh]"
            />
        </div>
    </div>
}