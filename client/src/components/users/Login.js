import React from "react";
import {useContext} from "react";

// utils
import {handleLogin, handleChangeInput} from "../../utils/users/userHandlers.js";

// component imports
import MessageComponent from "../common/Message";

// context imports
import {UserContext} from "../../utils/context/UserContext";
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";
import {ApiCodeContext} from "../../utils/context/ApiCodeContext";

// style imports
import {withStyles} from "@material-ui/core/styles";
import formStyles from "../../utils/style/formStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";


const Login = (props) => {

    const classes = props.classes;

    const {setCode} = useContext(ApiCodeContext);
    const {setMessage} = useContext(ApiMessageContext);
    const {setUser, user} = useContext(UserContext);

    return (
        <Grid container>
            <Grid item xs={12}>
                <h2 className={classes.heading}>Sign In to your account</h2>
            </Grid>
            <Grid item xs={12} className={classes.formGrid}>
                <MessageComponent/>
                <form onSubmit={e => handleLogin(e, setMessage, setUser, user, setCode)} className={classes.form}>
                        <TextField
                            className={classes.userInput}
                            type="text"
                            value={user.email || ""}
                            name="email"
                            label="email"
                            onChange={e => handleChangeInput(e, user, setUser)}
                        />

                        <br/>

                        <TextField
                            className={classes.userInput}
                            type="password"
                            value={user.password || ""}
                            name="password"
                            label="password"
                            onChange={e => handleChangeInput(e, user, setUser)}
                        />

                    <Button type="submit" className={classes.button}>Sign In</Button>
                </form>
            </Grid>
        </Grid>
    );
}

export default withStyles(formStyles)(Login);