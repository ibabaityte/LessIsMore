import React, {useEffect, useState} from "react";

// util imports
import {fetchSubscribers} from "../../../utils/admin/adminSubscriberUtils";

// style imports
import {withStyles} from "@material-ui/core/styles";
import adminSubscriberStyle from "../../../utils/style/adminSubscriberStyle";

const AdminSubscribers = (props) => {

    const classes = props.classes;

    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        fetchSubscribers(setSubscribers);
    }, []);

    return (
        <div>
            <h1 className={classes.heading}>Admin Subscribers</h1>
            <div className={classes.grid}>
                {
                    subscribers.map((sub, key) => {
                        return (
                            <div key={key} className={classes.emailWrapper}>
                                <div className={classes.email}><span className={classes.emailNumber}>{key + 1}.</span> {sub.email}</div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default withStyles(adminSubscriberStyle)(AdminSubscribers);