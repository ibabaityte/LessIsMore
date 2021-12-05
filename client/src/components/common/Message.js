import React, {useContext} from "react";

// context imports
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";
import {ApiCodeContext} from "../../utils/context/ApiCodeContext";

// style imports
import Alert from '@mui/material/Alert';

const MessageComponent = () => {

    const {code} = useContext(ApiCodeContext);

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