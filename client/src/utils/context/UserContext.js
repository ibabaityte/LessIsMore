import {createContext} from "react";

export const UserContext = createContext({
    user: {
        email: "",
        firstName: "",
        lastName: "",
        token: "",
        userId: "",
        userType: ""
    },
    setUser: () => {}
});