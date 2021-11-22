import React from "react";
import {useContext} from "react";

// utils
import {handleLogin, handleChangeLogin} from "../../utils/users/userHandlers.js";

// style imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";
import MessageComponent from "../common/Message";
import {UserContext} from "../../utils/context/UserContext";

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
                        onChange={e => handleChangeLogin(e, user, setUser)}
                    />

                    <br/>

                    <TextField
                        type="password"
                        value={user.password || ""}
                        name="password"
                        label="password"
                        onChange={e => handleChangeLogin(e, user, setUser)}
                    />

                </div>
                <Button type="submit">Sign In</Button>
            </form>
        </div>
    );
}

export default Login;