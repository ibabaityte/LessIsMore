import React, {useContext} from "react";

// style imports
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// util imports
import {searchProducts} from "../../utils/products/productUtils";
import {handleSearchProducts} from "../../utils/products/productHandlers";
import {clearSearch} from "../../utils/products/productUtils";

// context imports
import {ApiMessageContext} from "../../utils/context/ApiMessageContext";

const Search = (props) => {

    const {setMessage} = useContext(ApiMessageContext);

    const {
        searchQuery,
        setSearchQuery,
        setProducts
    } = props;

    return (
        <div>
            <div>Search Component</div>
            <form onSubmit={e => searchProducts(e, setProducts, searchQuery, setMessage)}>
                <TextField
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
                    onClick={() => clearSearch(setProducts, "all", setSearchQuery)}>Clear and show all
                </Button>
            </form>
        </div>
    );
};

export default Search;