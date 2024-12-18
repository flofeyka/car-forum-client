import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Input,
    Modal, ModalBody,
    ModalContent, ModalFooter,
    ModalHeader, Spinner, Textarea,
    useDisclosure
} from "@nextui-org/react";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addPost, fetchPosts} from "../../redux/slices/postSlice";
import Post from "./Post";

export default function News() {
    const {posts, loading} = useSelector(state => state.post);
    const {userData} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const {isOpen, onOpenChange, onOpen, onClose} = useDisclosure();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    useEffect(() => {
        dispatch(fetchPosts());
    }, [posts.length, dispatch]);

    return <div className="w-full flex justify-center">
        <Card className={"w-[80%]"}>
            <CardHeader className={'text-3xl flex justify-between'}>
                <span>
                    Последние новости
                </span>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"4xl"} className={"h-[80%]"}>
                    <ModalContent>
                        <ModalHeader className={'text-2xl'}>
                            {<Input size={"lg"} onChange={(e) => setTitle(e.target.value)} value={title} className={"w-[97%]"} placeholder={"Заголовок"}/>}
                        </ModalHeader>
                        <ModalBody>
                            {<Textarea size={"lg"} onChange={(e) => setContent(e.target.value)} value={content} className={"h-full"} placeholder={"Содержание"}/>}
                        </ModalBody>
                        <ModalFooter>
                            <Button size={"lg"} color={"success"} onPress={async () => {
                                await dispatch(addPost({title, content}));
                                setTitle("");
                                setContent("");
                                onClose();
                            }} className={"text-white"}>Добавить</Button>
                            <Button size={"lg"} color={"danger"} onPress={onClose}>Закрыть</Button>
                        </ModalFooter>
                    </ModalContent>

                </Modal>
                {userData?.role === 'admin' && <span><Button disabled={loading} onPress={onOpen}>{loading ? <Spinner/> : "Добавить новость"}</Button></span>}
            </CardHeader>
            <CardBody className={'flex flex-col gap-2'}>
                {posts.map(post => <Post key={post?._id} creator={post.user.fullName} _id={post._id} isAdmin={userData?.role === 'admin'} title={post.title} content={post.content} />)}
            </CardBody>
        </Card>
    </div>
}