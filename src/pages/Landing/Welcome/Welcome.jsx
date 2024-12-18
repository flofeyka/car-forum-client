export default function Welcome() {
    return <div style={{backgroundImage: 'url("/images/bg-landing.jpg")', opacity: "0.7", backgroundColor: 'black'}}
                className="bg-bottom h-[92vh] bg-cover flex items-center">
        <div className="flex justify-center">
            <div className="text-white w-[70%] font-semibold flex flex-col gap-4">
                <div className="text-6xl">
                    Автомобильный клуб: ваш онлайн-гид в автосфере
                </div>
                <div>
                    Узнайте все о ближайших событиях и форумах для автолюбителей.
                    Присоединяйтесь к нашему сообществу и делитесь опытом.
                </div>
                <div>
                    <button
                        className="bg-yellow-400 rounded-[8px] p-4 text-black hover:bg-yellow-500 transition-all px-10">
                        Связаться с нами
                    </button>
                </div>
            </div>
        </div>
    </div>
}