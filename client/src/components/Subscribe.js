import React, {useState, useEffect} from "react";

// utils imports
import {handleChangeSubscribe, handleSubscribe} from "../utils/subscribers/subscriberHandlers";

// style imports
import {withStyles} from "@material-ui/core/styles";
import subscribeStyles from "../utils/style/subscribeStyles";
import Grid from '@mui/material/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// icon imports
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Subscribe = (props) => {
    const classes = props.classes;

    const {modalOpen, setModalOpen} = props;

    const [subscriberEmail, setSubscriberEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        let modalVisible = localStorage.getItem('modalVisible');
        if (!modalVisible) {
            setModalOpen(true);
            localStorage.setItem('modalVisible', "yes");
        }
    }, [setModalOpen])

    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <Grid container className={classes.modalBox}>
                        <Grid item xs={12} className={classes.iconDiv}>
                            <IconButton onClick={() => setModalOpen(false)}>
                                <CloseIcon fontSize="large"/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                            <h1 className={classes.modalHeading}>Subscribe to our newsletter</h1>
                            <EmailOutlinedIcon className={classes.modalIcon} fontSize="large"/>
                            <div>{message}</div>
                        </Grid>
                        <Grid item xs={12} className={classes.modalForm}>
                            <form onSubmit={(e) => handleSubscribe(e, subscriberEmail, setMessage)} className={classes.form}>
                                <TextField
                                    type="text"
                                    value={subscriberEmail || ""}
                                    name="email"
                                    label="email"
                                    onChange={e => handleChangeSubscribe(e, setSubscriberEmail)}
                                    className={classes.input}
                                />
                                <Button size="large" type="submit" variant="outlined" className={classes.button}>Subscribe</Button>
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
};

export default withStyles(subscribeStyles)(Subscribe);