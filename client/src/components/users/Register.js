import React, {useContext, useState} from "react";

// util imports
import {handleRegister, handleChangeInput} from "../../utils/users/userHandlers";

// context imports
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";
import {ApiCodeContext} from "../../utils/context/ApiCodeContext";

// style imports
import {withStyles} from "@material-ui/core/styles";
import formStyles from "../../utils/style/formStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MessageComponent from "../common/Message";
import Grid from '@mui/material/Grid';

const Register = (props) => {

    const classes = props.classes;

    const {setCode} = useContext(ApiCodeContext);
    const {setMessage} = useContext(ApiMessageContext);

    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    return (
        <Grid container>
            <Grid item xs={12}>
                <h2 className={classes.heading}>Sign Up to your account</h2>
            </Grid>
            <Grid item xs={12} className={classes.formGrid}>
                <MessageComponent/>
                <form onSubmit={e => handleRegister(e, setMessage, newUser, setNewUser, setCode)} className={classes.form}>
                        <TextField
                            className={classes.userInput}
                            type="text"
                            value={newUser.firstName}
                            name="firstName"
                            label="First name"
                            onChange={e => handleChangeInput(e, newUser, setNewUser)}
                        />

                        <br/>

                        <TextField
                            className={classes.userInput}
                            type="text"
                            value={newUser.lastName}
                            name="lastName"
                            label="Last name"
                            onChange={e => handleChangeInput(e, newUser, setNewUser)}
                        />

                        <br/>

                        <TextField
                            className={classes.userInput}
                            type="text"
                            value={newUser.email}
                            label="Email"
                            name="email"
                            onChange={e => handleChangeInput(e, newUser, setNewUser)}
                        />

                        <br/>

                        <TextField
                            className={classes.userInput}
                            type="password"
                            value={newUser.password}
                            label="Password"
                            name="password"
                            onChange={e => handleChangeInput(e, newUser, setNewUser)}
                        />
                    <Button type="submit" className={classes.button}>Sign Up</Button>
                </form>
            </Grid>
        </Grid>
    );
}

export default withStyles(formStyles)(Register);