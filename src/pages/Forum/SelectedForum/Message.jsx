import {
    Avatar,
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Image, Input, Spinner,
    Textarea
} from "@nextui-org/react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {editMessage} from "../../../redux/slices/forumSlice";

export default function Message({_id, fullName, message}) {
    const [changeMode, setChangeMode] = useState(false);
    const [currentMessage, setCurrentMessage] = useState(message);

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.forum);


    return <div key={_id} className={"flex gap-1 items-start w-full"}>
        <div>
            <Avatar/>
        </div>
        <div className={'break-all w-full'}>
            <div className={'text-xl font-semibold'}>{fullName}</div>
            {changeMode ? <div className={"flex w-full items-center gap-2"}>
                        <Input size={"lg"} className={'w-full flex'} defaultValue={message} value={currentMessage}
                                  onChange={(e) => setCurrentMessage(e.target.value)}/>
                        <Button disabled={loading} size={"lg"} onPress={async () => {
                            await dispatch(editMessage({_id, message: currentMessage}));
                            setChangeMode(false);
                            setCurrentMessage(message);
                        }}>{loading ? <Spinner/> : "Применить"}</Button>
                    </div> : <div className={'break-all'}>{message}</div>
            }
        </div>
        <div className={'flex justify-end'}>
            {!changeMode && <Dropdown>
                <DropdownTrigger><Image src={"/icons/three-dots.svg"} className={'h-4 w-4'}/></DropdownTrigger>

                <DropdownMenu>
                    <DropdownItem color={"warning"} className={'text-white'}
                                  onPress={() => setChangeMode(true)}>Изменить</DropdownItem>
                    <DropdownItem color={"danger"}>Удалить</DropdownItem>
                </DropdownMenu>
            </Dropdown>}

        </div>
    </div>
}