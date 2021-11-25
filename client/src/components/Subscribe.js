import React, {useState, useEffect} from "react";

// utils imports
import {handleChangeSubscribe, handleSubscribe} from "../utils/subscribers/subscriberHandlers";

// style imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const Subscribe = (props) => {
    const {modalOpen, setModalOpen} = props;

    const [subscriberEmail, setSubscriberEmail] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        let modalVisible = localStorage.getItem('modalVisible');
        if(!modalVisible){
            setModalOpen(true);
            localStorage.setItem('modalVisible',"yes");
        }
    },[setModalOpen])

    return (
        <div>
            <Modal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box style={{width: "500px", height: "500px", margin: "auto"}}>
                    <div>Subscribe to our newsletter</div>
                    <div>{message}</div>
                    <div onClick={() => setModalOpen(false)}>X CLOSE </div>
                    <form onSubmit={(e) => handleSubscribe(e, subscriberEmail, setMessage)}>
                        <TextField
                            type="text"
                            value={subscriberEmail || ""}
                            name="email"
                            label="email"
                            onChange={e => handleChangeSubscribe(e, setSubscriberEmail)}
                        />
                        <Button type="submit">Subscribe</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default Subscribe;