import React from "react";

// style imports
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// util imports
import {initProducts} from "../../utils/products/productUtils";

const Filter = (props) => {

    const {
        setProducts
    } = props;

    return (
        <div>
            <ToggleButtonGroup
                exclusive
                onClick={(e) => initProducts(setProducts, e.target.value)}
                aria-label="text alignment"
            >
                <ToggleButton value="all" aria-label="left aligned">All</ToggleButton>
                <ToggleButton value="pants" aria-label="left aligned">Pants</ToggleButton>
                <ToggleButton value="shirts" aria-label="centered">Shirts</ToggleButton>
                <ToggleButton value="accessories" aria-label="right aligned">Accessories</ToggleButton>
                <ToggleButton value="sweaters" aria-label="justified">Sweaters</ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default Filter;