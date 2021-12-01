import React, {useContext, useEffect} from "react";
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";

const MessageComponent = () => {
    const {setMessage} = useContext(ApiMessageContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage("");
            localStorage.setItem("apiMessage", "");
        }, 5000);
        return () => clearTimeout(timer);
    });

    return(
        <div>
            <ApiMessageContext.Consumer>
                {
                    ({message}) => (
                        <div>{message}</div>
                    )
                }
            </ApiMessageContext.Consumer>
        </div>
    );
}

export default MessageComponent;