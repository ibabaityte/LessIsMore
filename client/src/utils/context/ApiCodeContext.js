import {createContext} from "react";

export const ApiCodeContext = createContext({
    code: "",
    setCode: () => {}
});