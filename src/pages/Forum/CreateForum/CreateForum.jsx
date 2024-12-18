import {Button, Input, Textarea} from "@nextui-org/react";
import {useDispatch} from "react-redux";
import {createForum} from "../../../redux/slices/forumSlice";
import {useForm} from "react-hook-form";

export default function CreateForum() {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const onSubmit = async data => {
        await dispatch(createForum(data));
    };

    return <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3"}>
        <Input {...register('title', {required: true})} label={"Введите название темы"}/>
        <Textarea {...register('description', {required: true})} label={"Описание"}/>
        <Button type={"submit"} size={"lg"} color={"primary"}>Создать</Button>
    </form>
}