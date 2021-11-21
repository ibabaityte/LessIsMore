import {createContext} from "react";

export const ApiMessageContext = createContext({
    message: "",
    setMessage: () => {}
});