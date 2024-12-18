import {Button, Input} from "@nextui-org/react";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../../redux/slices/forumSlice";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import Message from "./Message";

export default function SelectedForum() {
    const {register, handleSubmit} = useForm();
    const {userData} = useSelector(state => state.auth);
    const {selectedForum} = useSelector(state => state.forum);
    const dispatch = useDispatch();

    const onSubmit = async (data) => await dispatch(sendMessage({_id: selectedForum._id, message: data.message}));

    const navigate = useNavigate();
    useEffect(() => {
        navigate(`/forum/${selectedForum._id}`);
    }, [selectedForum._id, navigate]);

    return <div>
        <div className={'flex flex-col gap-2 w-full'}>
            {selectedForum.messages?.map(message => <Message key={message._id} message={message.message} _id={message._id} fullName={message.user.fullName} />)}
        </div>
        {userData ? <form onSubmit={handleSubmit(onSubmit)} className={"flex gap-2 mt-5"}>
            <Input {...register("message", {required: true})} placeholder={"Введите новое сообщение"} size={"lg"}/>
            <Button type={"submit"} className={"flex justify-self-end"} size={"lg"}>Отправить</Button>
        </form> : <div className={'text-center text-xl '}>
            <Link to={"/"} className={"text-primary-400"}>Зарегистрируйтесь</Link> или <Link className={"text-primary-400"} to={"/"}>войдите</Link> чтобы отправить сообщение
        </div>}

    </div>
}