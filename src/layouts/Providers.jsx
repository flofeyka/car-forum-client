import {Provider} from "react-redux";
import {store} from "../redux/store";
import {BrowserRouter} from "react-router-dom";
import {NextUIProvider} from "@nextui-org/react";
import React from "react";

export default function Providers({children}) {
    return <Provider store={store}>
        <BrowserRouter>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </BrowserRouter>
    </Provider>
}