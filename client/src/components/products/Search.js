import React, {useContext} from "react";

// style imports
import {withStyles} from "@material-ui/core/styles";
import searchStyles from "../../utils/style/searchStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// util imports
import {searchProducts} from "../../utils/products/productUtils";
import {handleSearchProducts} from "../../utils/products/productHandlers";
import {clearSearch} from "../../utils/products/productUtils";

// context imports
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";
import {ApiCodeContext} from "../../utils/context/ApiCodeContext";

const Search = (props) => {

    const classes = props.classes;

    const {setCode} = useContext(ApiCodeContext);
    const {setMessage} = useContext(ApiMessageContext);

    const {
        searchQuery,
        setSearchQuery,
        setProducts
    } = props;

    return (
        <div className={classes.search}>
            <form onSubmit={e => searchProducts(e, setProducts, searchQuery, setMessage, setCode)} className={classes.form}>
                <TextField
                    className={classes.searchBar}
                    id="standard-basic"
                    label="Search by title..."
                    type="text"
                    value={searchQuery}
                    name="title"
                    onChange={e => {
                        handleSearchProducts(e, setSearchQuery)
                    }}
                />
                <Button
                    value="Search"
                    onClick={() => clearSearch(setProducts, "all", setSearchQuery)}>Clear
                </Button>
            </form>
        </div>
    );
};

export default withStyles(searchStyles)(Search);