import {login, register} from "./userUtils.js";

const handleLogin = (e, setMessage, setUser, user) => {
    e.preventDefault();
    login(setMessage, setUser, user);
}

const handleChangeLogin = (e, user, setUser) => {
    e.preventDefault();
    setUser({
            ...user,
            [e.currentTarget.name]: e.target.value
        }
    );
}

const handleRegister = (e, setMessage, newUser, setNewUser) => {
    e.preventDefault();
    register(setMessage, newUser, setNewUser);
}

const handleChangeRegister = (e, newUser, setNewUser) => {
    e.preventDefault();
    setNewUser({
            ...newUser,
            [e.currentTarget.name]: e.target.value
        }
    );
}


export {
    handleLogin,
    handleChangeLogin,
    handleRegister,
    handleChangeRegister
};