export default function Reviews() {
    return <div id={"Reviews"}>
        <div className={"text-5xl text-center font-semibold"}>Отзывы наших участников</div>
        <div className={"flex gap-10 justify-center items-stretch mt-10 text-2xl"}>
            <span
                className={"w-[22.5%] border-white border rounded-xl p-5 text-center flex flex-col items-center justify-between gap-5"}>
              <div><img src={"/images/Reviews/alexey.png"} alt={"alexey"}
                        className={'rounded-full h-[100px] object-cover w-[100px]'}/></div>
              <div>Отличный сайт для автолюбителей! Удобный доступ к информации о клубе и возможностям общения в форумах.</div>
              <div className={'font-semibold'}>Алексей</div>
            </span>
            <span
                className={"w-[22.5%] p-5 border-white border rounded-xl text-center flex flex-col items-center justify-between gap-5"}>
              <div><img src={"/images/Reviews/marina.png"} alt={"marina"}
                        className={'rounded-full h-[100px] object-cover w-[100px]'}/></div>
              <div>Благодаря клубу всегда в курсе последних событий и мероприятий! Отличная платформа для общения.</div>
              <div className={'font-semibold'}>Марина</div>
            </span>
            <span
                className={"w-[22.5%] p-5 border-white border rounded-xl text-center flex flex-col items-center justify-between gap-5"}>
              <div><img src={"/images/Reviews/svetlana.png"} alt={"svetlana"}
                        className={'rounded-full h-[100px] object-cover w-[100px]'}/></div>
              <div>Очень нравится, что сайт постоянно развивается и добавляются новые функции, что делает использование ещё удобнее.</div>
              <div className={'font-semibold'}>Светлана</div>
            </span>
        </div>

        <div className={"mt-10"}>
            <img className={"w-full h-[40vh] object-cover object-center"} src={"/images/bg-bottom.png"}
                 alt={"bottom bg"}/>
        </div>
    </div>
}