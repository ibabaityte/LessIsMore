import React, {useState} from "react";

// style imports
import {withStyles} from "@material-ui/core/styles";
import searchStyles from "../../utils/style/searchStyles";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// util imports
import {initProducts} from "../../utils/products/productUtils";

const Filter = (props) => {

    const classes = props.classes;
    const {setProducts} = props;

    const [markedCategory, setMarkedCategory] = useState("all");

    const markCategory = (btn) => {
        setMarkedCategory(btn);
    };

    const addMarkedClass = (btn) => {
        if (markedCategory === btn) {
            return `${classes.markedCategory}`;
        } else {
            return `${classes.category}`;
        }
    };

    return (
        <div className={classes.filter}>
            <ToggleButtonGroup
                className={classes.categoryButtons}
                onClick={(e) => initProducts(setProducts, e.target.value)}
            >
                <div className={classes.categories}>
                    <ToggleButton value="all" onClick={() => {markCategory("all")}} className={addMarkedClass("all")}>All</ToggleButton>
                    <ToggleButton value="pants" onClick={() => {markCategory("pants")}} className={addMarkedClass("pants")}>Pants</ToggleButton>
                    <ToggleButton value="shirts" onClick={() => {markCategory("shirts")}} className={addMarkedClass("shirts")}>Shirts</ToggleButton>
                </div>
                <div className={classes.categories}>
                    <ToggleButton value="accessories" onClick={() => {markCategory("accessories")}} className={addMarkedClass("accessories")}>Accessories</ToggleButton>
                    <ToggleButton value="sweaters" onClick={() => {markCategory("sweaters")}} className={addMarkedClass("sweaters")}>Sweaters</ToggleButton>
                </div>
            </ToggleButtonGroup>
        </div>
    );
};

export default withStyles(searchStyles)(Filter);