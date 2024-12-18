import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getUserData} from "../redux/slices/authSlice";
import {Outlet} from "react-router-dom";

export default function AuthLayout({children}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch]);

    return <div>
        <Outlet/>
    </div>
}