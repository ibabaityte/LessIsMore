import {createContext} from "react";

export const UserContext = createContext({
    user: {
        email: "",
        firstName: "",
        lastName: "",
        token: "",
        userType: ""
    },
    setUser: () => {}
});