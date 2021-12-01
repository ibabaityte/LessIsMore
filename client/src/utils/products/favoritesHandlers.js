// util imports
import {updateFavorites} from "./favoriteUtils";

const removeFavorite = (array, objectId, user, setFavorites) => {
    let arr = array;
    const index = arr.findIndex(object => object._id === objectId);
    arr.splice(index,1);
    updateFavorites(arr, user, setFavorites);
};

const addFavorite = (array, object, objectId, user, setFavorites, setMessage) => {
    let arr = array;
    if(user.token === null) {
        setMessage("You must be signed in to add this product to favorites list.");
        localStorage.setItem("apiMessage", "You must be signed in to add this product to favorites list.");
    } else {
        if(arr.findIndex(object => object._id === objectId) === -1) {
            arr.push(object);
            updateFavorites(arr, user, setFavorites);
        } else {
            setMessage("This product is already in your favorites list.");
            localStorage.setItem("apiMessage", "This product is already in your favorites list.");
        }
    }
};

export {
    removeFavorite,
    addFavorite
};