import {Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Forum from "./pages/Forum/Forum";
import AuthLayout from "./layouts/AuthLayout";
import Lk from "./pages/Lk/Lk";
import InsideServiceLayout from "./layouts/InsideServiceLayout";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getUserData} from "./redux/slices/authSlice";
import News from "./pages/News/News";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserData());
    }, [dispatch]);

    return <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path={"/"} element={<InsideServiceLayout/>}>
            <Route path="/forum/:id" element={<Forum/>}/>
            <Route path="/forum/" element={<Forum/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/" element={<AuthLayout/>}>
                <Route path="/lk" element={<Lk/>}/>
            </Route>
        </Route>
    </Routes>
}

export default App;
