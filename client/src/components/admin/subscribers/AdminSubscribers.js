import React, {useEffect, useState} from "react";

// util imports
import {fetchSubscribers} from "../../../utils/admin/adminSubscriberUtils";

const AdminSubscribers = () => {

    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
         fetchSubscribers(setSubscribers);
    }, []);

    return (
        <div>
            <div>Admin Subscribers</div>
            {
                subscribers.map((sub, key) => {
                    return (
                        <div key={key}>
                            <div>{key + 1}</div>
                            <div>{sub.email}</div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default AdminSubscribers;