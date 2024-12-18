import {useSelector} from "react-redux";
import {Button, Card, CardBody, CardFooter, CardHeader, Input} from "@nextui-org/react";
import {useState} from "react";

export default function Lk() {
    const {userData} = useSelector((state) => state.auth);
    const [email, setEmail] = useState(userData?.email);
    const [fullName, setFullName] = useState(userData?.fullName);

    return <div className={"text-white flex justify-center"}>
        <Card className="w-[70%]">
            <CardHeader className={"text-3xl"}>Личный кабинет</CardHeader>
            <CardBody className={"flex flex-col gap-2"}>
                <div className={"flex gap-2 items-center text-xl"}>Имя: <Input label={"Имя и фамилия"} value={fullName} onChange={(e) => setFullName(e.target.value)} defaultValue={userData?.fullName}/></div>
                <div className={"flex gap-2 items-center text-xl "}>Почта: <Input label={"E-mail"} value={email} onChange={(e) => setEmail(e.target.value)} defaultValue={userData?.email}/></div>
                <div className={"text-2xl"}>Роль: {userData?.role}</div>
            </CardBody>
            <CardFooter>
                <Button size={"lg"} disabled={email === userData?.email && fullName === userData?.fullName}>Применить</Button>
            </CardFooter>
        </Card>
    </div>
}