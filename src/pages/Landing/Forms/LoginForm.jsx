import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {setError, signIn} from "../../../redux/slices/authSlice";
import {Button, Input, Spinner} from "@nextui-org/react";

export default function LoginForm() {
    const {error, userData, loading} = useSelector(state => state.auth);
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        dispatch(setError(null));
        await dispatch(signIn(data));
        if (!error && userData) {
            navigate("/lk");
        }
    };

    return <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-3 w-[80%]"}>
        <p className={"text-center text-red-500"}>{error}</p>
        <Input {...register('email', {required: true})}  placeholder={"Электронная почта"} type={"email"} size={"lg"}/>
        <Input {...register('password', {required: true})} placeholder={"Пароль"} type={"password"} size={"lg"}/>
        <Button isDisabled={loading} type={'submit'} size={"lg"}>
            {loading ? <Spinner/> :
            "Войти"}
        </Button>
    </form>


}
