import React, {useContext, useState} from "react";

// util imports
import {handleRegister, handleChangeRegister, handleChangeLogin} from "../../utils/users/userHandlers";

// style imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MessageComponent from "../common/Message";
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";

const Register = () => {

    const {setMessage} = useContext(ApiMessageContext);

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    return (
        <div>
            <div>Sign Up in to your account</div>
            <MessageComponent/>

            <form onSubmit={e => handleRegister(e, setMessage, newUser, setNewUser)}>
                <div className="inputs">

                    <TextField
                        type="text"
                        value={newUser.firstName}
                        name="firstName"
                        label="firstName"
                        onChange={e => handleChangeLogin(e, newUser, setNewUser)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={newUser.lastName}
                        name="lastName"
                        label="lastName"
                        onChange={e => handleChangeLogin(e, newUser, setNewUser)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={newUser.email}
                        label="email"
                        name="email"
                        onChange={e => handleChangeRegister(e, newUser, setNewUser)}
                    />

                    <br/>

                    <TextField
                        type="password"
                        value={newUser.password}
                        label="password"
                        name="password"
                        onChange={e => handleChangeRegister(e, newUser, setNewUser)}
                    />

                </div>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default Register;