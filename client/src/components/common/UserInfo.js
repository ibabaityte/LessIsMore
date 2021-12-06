import React from "react";

// context imports
import {UserContext} from "../../utils/context/UserContext";

// style imports
import {withStyles} from "@material-ui/core/styles";
import userProfileStyles from "../../utils/style/userProfileStyles";

const UserInfoComponent = (props) => {

    const classes = props.classes;

    return (
        <div>
            <UserContext.Consumer>
                {
                    ({user}) => (
                        user ?
                            <div>
                                <h3>User information:</h3>
                                <div className={classes.info}><span className={classes.infoName}>Email:</span> {user.email}</div>
                                <div className={classes.info}><span className={classes.infoName}>Firstname:</span> {user.firstName}</div>
                                <div className={classes.info}><span className={classes.infoName}>Lastname:</span> {user.lastName}</div>
                            </div> : ""
                    )
                }
            </UserContext.Consumer>
        </div>
    );
};

export default withStyles(userProfileStyles)(UserInfoComponent);