import {login, register} from "./userUtils.js";

const handleChangeInput = (e, state, setState) => {
    e.preventDefault();
    setState({
            ...state,
            [e.currentTarget.name]: e.target.value
        }
    );
}

const handleLogin = (e, setMessage, setUser, user, setCode) => {
    e.preventDefault();
    login(setMessage, setUser, user, setCode);
}

const handleRegister = (e, setMessage, newUser, setNewUser, setCode) => {
    e.preventDefault();
    register(setMessage, newUser, setNewUser, setCode);
}

export {
    handleLogin,
    handleChangeInput,
    handleRegister
};