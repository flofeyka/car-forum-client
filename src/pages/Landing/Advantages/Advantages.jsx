export default function Advantages() {
    return <div
        id={"best"}
        className="bg-[url('/public/images/bg-landing.jpg')] opacity-60 h-[75vh] w-full justify-center  bg-center bg-cover flex flex-col items-center p-10 gap-3 text-white bg-black">
        <div className="text-5xl mb-10 font-semibold">
            Преимущества нашего автомобильного клуба
        </div>
        <div className="flex mt-5">
              <span className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-white ">
                  <img
                      alt="like"
                      src="/icons/like.svg"
                      className="h-[30px] w-[30px] fill-yellow-500"
                  />
                </div>
                <div className="w-[60%] text-center">
                  <div className="text-2xl">
                    Обширные возможности пользователей
                  </div>
                  <div className="text-xl text-gray-400">
                    Различные роли для оптимального взаимодействия: гость,
                    пользователь и администратор.
                  </div>
                </div>
              </span>

            <span className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-white ">
                  <img
                      alt="plus"
                      src="/icons/plus.svg"
                      className="h-[30px] w-[30px] fill-yellow-500"
                  />
                </div>
                <div className="text-center w-[60%]">
                  <div className="text-2xl">
                    Обширные возможности пользователей
                  </div>
                  <div className="text-xl text-gray-400">
                    Следите за предстоящими событиями и регистрируйтесь на них
                    одним кликом.
                  </div>
                </div>
              </span>

            <span className="flex flex-col items-center">
                <div className="p-4 rounded-full bg-white ">
                  <img
                      alt="fire"
                      src="/icons/fire.svg"
                      className="h-[30px] w-[30px] fill-yellow-500"
                  />
                </div>
                <div className="text-center w-[65%]">
                  <div className="text-2xl">
                    Обширные возможности пользователей
                  </div>
                  <div className="text-xl text-gray-400">
                    Обсуждайте темы, отвечайте на вопросы и ищите полезную
                    информацию.
                  </div>
                </div>
              </span>
        </div>
    </div>
}