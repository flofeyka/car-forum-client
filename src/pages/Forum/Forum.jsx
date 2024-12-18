import {Avatar, Button, Card, CardBody, CardHeader, Spinner} from "@nextui-org/react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getForum, getForums, setSelectedForum} from "../../redux/slices/forumSlice";
import {getUserData} from "../../redux/slices/authSlice";
import CreateForum from "./CreateForum/CreateForum";
import {Link, useNavigate} from "react-router-dom";
import SelectedForum from "./SelectedForum/SelectedForum";

export default function Forum() {
    const [createMode, setCreateMode] = useState(false)
    const {forumList, selectedForum, loading} = useSelector(state => state.forum);
    const {userData} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getForums());
        dispatch(getUserData())
    }, [dispatch, forumList.length]);

    const onCreateMode = () => setCreateMode(!createMode);

    return <div className="p-10 flex justify-center">
        <Card className="w-[80%] ">
            <CardHeader className={"flex items-center z-10 justify-between border-b border-[gray]"}>
                <span className={"text-2xl font-semibold"}>{selectedForum?.title || "Форум"}</span>
                {selectedForum && <span><Button onPress={() => {
                    dispatch(setSelectedForum(null));
                    navigate('/forum');
                }}>Назад</Button></span>}
                {userData && !selectedForum && <span>
                    <Button onPress={onCreateMode}> {createMode ? "Назад" : "Создать тему"}</Button>
                </span>}
            </CardHeader>
            <CardBody>
                {loading ? <Spinner/> : <div>
                    {selectedForum ? <SelectedForum/> : <div>
                        {createMode ? <CreateForum/> : <div className={"flex flex-col gap-2"}>
                            {forumList.length < 1 &&
                                <div className={"text-3xl text-center"}>Список пока что пуст :(</div>}
                            {forumList.map(forum => <div key={forum._id} onClick={async () => {
                                navigate(`/forum/${forum._id}`);
                                await dispatch(getForum(forum));
                            }} className={"text-3xl border-b p-1 flex gap-2"}>
                                <div>
                                    <Avatar/>
                                </div>
                                <div>
                                    <Link to={`/forum/${forum._id}`}>{forum.title}</Link>
                                </div>
                            </div>)}
                        </div>}
                    </div>}
                </div>}

            </CardBody>
        </Card>
    </div>
}