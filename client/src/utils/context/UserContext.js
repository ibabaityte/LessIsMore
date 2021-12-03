import {createContext} from "react";

export const UserContext = createContext({
    userC: {
        email: "",
        firstName: "",
        lastName: "",
        token: "",
        userId: "",
        userType: "",
        expirationTimestamp: ""
    },
    setUserC: () => {}
});