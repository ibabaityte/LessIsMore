import React from "react";
import {useContext} from "react";

// utils
import {handleLogin, handleChangeInput} from "../../utils/users/userHandlers.js";

// style imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// component imports
import MessageComponent from "../common/Message";

// context imports
import {UserContext} from "../../utils/context/UserContext";
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";


const Login = () => {

    const {setMessage} = useContext(ApiMessageContext);
    const {setUser, user} = useContext(UserContext);

    return (
        <div>
            <div>Sign In to your account</div>
            <MessageComponent/>

            <form onSubmit={e => handleLogin(e, setMessage, setUser, user)}>

                <div className="inputs">

                    <TextField
                        type="text"
                        value={user.email || ""}
                        name="email"
                        label="email"
                        onChange={e => handleChangeInput(e, user, setUser)}
                    />

                    <br/>

                    <TextField
                        type="password"
                        value={user.password || ""}
                        name="password"
                        label="password"
                        onChange={e => handleChangeInput(e, user, setUser)}
                    />

                </div>
                <Button type="submit">Sign In</Button>
            </form>
        </div>
    );
}

export default Login;