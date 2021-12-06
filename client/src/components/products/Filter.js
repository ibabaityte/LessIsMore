import React from "react";

// style imports
import {withStyles} from "@material-ui/core/styles";
import searchStyles from "../../utils/style/searchStyles";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// util imports
import {initProducts} from "../../utils/products/productUtils";

const Filter = (props) => {

    const classes = props.classes;

    const {
        setProducts
    } = props;

    return (
        <div className={classes.filter}>
            <ToggleButtonGroup
                className={classes.categoryButtons}
                exclusive
                onClick={(e) => initProducts(setProducts, e.target.value)}
                aria-label="text alignment"
            >
                <ToggleButton value="all" className={classes.category}>All</ToggleButton>
                <ToggleButton value="pants" className={classes.category}>Pants</ToggleButton>
                <ToggleButton value="shirts" className={classes.category}>Shirts</ToggleButton>
                <ToggleButton value="accessories" className={classes.category}>Accessories</ToggleButton>
                <ToggleButton value="sweaters" className={classes.category}>Sweaters</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default withStyles(searchStyles)(Filter);