import {
    Avatar,
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader, Spinner,
    Textarea,
    useDisclosure
} from "@nextui-org/react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editPost} from "../../redux/slices/postSlice";

export default function Post({_id, title, creator, content, isAdmin}) {
    const {isOpen, onOpenChange, onOpen, onClose} = useDisclosure();
    const [currentTitle, setCurrentTitle] = useState(title);
    const [currentContent, setCurrentContent] = useState(content);
    const [changeMode, setChangeMode] = useState(false);


    const {loading} = useSelector(state => state.post);

    const dispatch = useDispatch();

    return <div>
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"4xl"} className={"h-[80%]"}>
            <ModalContent>
                <ModalHeader className={'text-2xl'}>
                    {changeMode ?
                        <Input size={"lg"} className={"w-[97%]"} onChange={(e) => setCurrentTitle(e.target.value)}
                               defaultValue={title} value={currentTitle}/> : title}
                </ModalHeader>
                <ModalBody>
                    {changeMode ?
                        <Textarea size={"lg"} className={"w-[97%]"} onChange={(e) => setCurrentContent(e.target.value)}
                                  defaultValue={content} value={currentContent}/> : content}
                </ModalBody>
                <ModalFooter className={"w-full flex items-center justify-between"}>
                    <span className={'flex items-center gap-2 text-xl font-semibold'}>
                        <Avatar/> {creator}
                    </span>
                    <span>
                    {isAdmin && <Button size={"lg"} disabled={loading} color={changeMode ? "danger" : "default"}
                                        onPress={() => setChangeMode(!changeMode)}>{loading ? <Spinner/> : changeMode ? "Отменить" : "Изменить"}</Button>}
                    {changeMode && <Button disabled={loading} size={"lg"} color={"success"} onPress={async () => {
                        await dispatch(editPost({_id, title: currentTitle, content: currentContent}));
                        setCurrentTitle(title);
                        setCurrentContent(content);
                        setChangeMode(false);
                    }} className={"text-white"}>{loading ? <Spinner/> : "Изменить"}</Button>}
                    {!changeMode && <Button size={"lg"} color={"danger"} onPress={onClose}>{loading ? <Spinner/> : "Закрыть"}</Button>}
                    </span>
                </ModalFooter>
            </ModalContent>
        </Modal>
        <div onClick={onOpen} className={"border-b text-xl pb-2 cursor-pointer"}>
            {title}
        </div>
    </div>
}