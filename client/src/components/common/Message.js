import React, {useState, useContext, useEffect} from "react";

// context imports
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";

// style imports
import Alert from '@mui/material/Alert';

const MessageComponent = () => {

    const {setMessage} = useContext(ApiMessageContext);

    const [code, setCode] = useState("");

    useEffect(() => {
        setCode(localStorage.getItem("code"));
    }, [setMessage]);

    return(
        <div>
            <ApiMessageContext.Consumer>
                {
                    ({message}) => (
                        <Alert style={{display: ((message === "") || (message === null) ? 'none' : null)}} severity={code === '200' ? 'success' : 'error'}>{message}</Alert>
                    )
                }
            </ApiMessageContext.Consumer>
        </div>
    );
}

export default MessageComponent;