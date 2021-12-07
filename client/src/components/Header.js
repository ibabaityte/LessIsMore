import React, {useContext} from "react";
import {Link} from "react-router-dom";

// util imports
import {logout} from "../utils/users/userUtils";

// context imports
import {UserContext} from "../utils/context/UserContext";

// style imports
import {withStyles} from "@material-ui/core/styles";
import headerStyles from "../utils/style/headerStyles";
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';

// icon imports
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const Header = (props) => {

    const {setModalOpen} = props;

    const classes = props.classes;

    const {user} = useContext(UserContext);

    if (user.userType === "ADMIN") {
        return (
            <AppBar position="static" className={classes.header}>
                <Grid container>
                    <Grid item xs={6}>
                        <h1><Link className={classes.link} to="/adminPanel/products">Less is more</Link></h1>
                    </Grid>
                    <Grid item xs={6} className={classes.iconDiv}>
                        <h3 className={classes.name}>Admin</h3>
                        <IconButton>
                            <Link to="" className={classes.link}>
                                <LogoutIcon className={classes.icon} onClick={() => logout()} fontSize="large"/>
                            </Link>
                        </IconButton>
                    </Grid>
                </Grid>
            </AppBar>
        )
    } else if (!!user.token) {
        return (
            <AppBar position="static" className={classes.header}>
                <Grid container>
                    <Grid item md={3} xs={6}>
                        <h1><Link to="/" className={classes.link}>Less is more</Link></h1>
                    </Grid>
                    <Grid item md={9} xs={6} className={classes.iconDiv}>
                        <h3 className={classes.name}>Hello, {user.firstName}</h3>
                        <IconButton>
                            <Link to="userProfile" className={classes.link}>
                                <AccountCircleIcon className={classes.icon} fontSize="large"/>
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link to="/" className={classes.link}>
                                <CheckroomIcon className={classes.icon} fontSize="large"/>
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link to="favorites" className={classes.link}>
                                <FavoriteIcon className={classes.icon} fontSize="large"/>
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link to="cart" className={classes.link}>
                                <ShoppingCartIcon className={classes.icon} fontSize="large"/>
                            </Link>
                        </IconButton>
                        <IconButton onClick={() => setModalOpen(true)}>
                            <Link to="" className={classes.link}>
                                <EmailIcon className={classes.icon} fontSize="large"/>
                            </Link>
                        </IconButton>
                        <IconButton onClick={() => logout()}>
                            <Link to="" className={classes.link}>
                                <LogoutIcon className={classes.icon} fontSize="large"/>
                            </Link>
                        </IconButton>
                    </Grid>
                </Grid>
            </AppBar>
        );
    } else {
        return (
            <AppBar position="static" className={classes.header}>
                <Grid container>
                    <Grid item xs={6}>
                        <h1><Link to="/" className={classes.link}>Less is more</Link></h1>
                    </Grid>
                    <Grid item xs={6} className={classes.iconDiv}>
                        <IconButton>
                            <Link to="userProfile" className={classes.link}>
                                <AccountCircleIcon className={classes.icon} fontSize="large"/>
                            </Link>
                        </IconButton>
                        <IconButton>
                            <Link to="/" className={classes.link}>
                                <CheckroomIcon className={classes.icon} fontSize="large"/>
                            </Link>
                        </IconButton>
                        <IconButton onClick={() => setModalOpen(true)}>
                            <Link to="" className={classes.link}>
                                <EmailIcon className={classes.icon} fontSize="large"/>
                            </Link>
                        </IconButton>
                    </Grid>
                </Grid>
            </AppBar>
        );
    }
}

export default withStyles(headerStyles)(Header);
