import {login, register} from "./userUtils.js";

const handleLogin = (e, setMessage, setUser, user) => {
    e.preventDefault();
    login(setMessage, setUser, user);
}

const handleChangeInput = (e, state, setState) => {
    e.preventDefault();
    setState({
            ...state,
            [e.currentTarget.name]: e.target.value
        }
    );
}

const handleRegister = (e, setMessage, newUser, setNewUser) => {
    e.preventDefault();
    register(setMessage, newUser, setNewUser);
}

export {
    handleLogin,
    handleChangeInput,
    handleRegister
};