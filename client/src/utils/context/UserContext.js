import {createContext} from "react";

export const UserContext = createContext({
    user: {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        token: "",
        userId: "",
        userType: "",
        expirationTimestamp: ""
    },
    setUser: () => {}
});