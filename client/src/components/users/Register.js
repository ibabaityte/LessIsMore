import React, {useContext, useState} from "react";

// util imports
import {handleRegister, handleChangeInput} from "../../utils/users/userHandlers";

// style imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MessageComponent from "../common/Message";

// context imports
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";
import {ApiCodeContext} from "../../utils/context/ApiCodeContext";

const Register = () => {

    const {setCode} = useContext(ApiCodeContext);
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

            <form onSubmit={e => handleRegister(e, setMessage, newUser, setNewUser, setCode)}>
                <div className="inputs">

                    <TextField
                        type="text"
                        value={newUser.firstName}
                        name="firstName"
                        label="firstName"
                        onChange={e => handleChangeInput(e, newUser, setNewUser)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={newUser.lastName}
                        name="lastName"
                        label="lastName"
                        onChange={e => handleChangeInput(e, newUser, setNewUser)}
                    />

                    <br/>

                    <TextField
                        type="text"
                        value={newUser.email}
                        label="email"
                        name="email"
                        onChange={e => handleChangeInput(e, newUser, setNewUser)}
                    />

                    <br/>

                    <TextField
                        type="password"
                        value={newUser.password}
                        label="password"
                        name="password"
                        onChange={e => handleChangeInput(e, newUser, setNewUser)}
                    />

                </div>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
}

export default Register;