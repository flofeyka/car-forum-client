import {Button, Input} from "@nextui-org/react";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../../../redux/slices/authSlice";
import {useNavigate} from "react-router-dom";

export default function RegisterForm() {
    const {error} = useSelector(state => state.auth);
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = async (data) => {
        await dispatch(signUp(data));
        if(!error) {
            navigate("/lk");
        }
    };

    return <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3 w-[80%]"}>
        {error && <p>{error.message}</p>}
        <Input {...register('fullName', {required: true})} placeholder={"Ваше имя"} size={"lg"}/>
        <Input {...register('email', {required: true})} placeholder={"Электронная почта"} type={"email"} size={"lg"}/>
        <Input {...register('password', {required: true})} placeholder={"Пароль"} type={"password"} size={"lg"}/>
        <Button type={'submit'} size={"lg"}>Зарегистрироваться</Button>
    </form>
}