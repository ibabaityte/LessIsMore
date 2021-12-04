import {updateShippingInfo} from "./shippingInfoUtils";

const handleShippingInfo = (e, user, newShippingInfo, setNewShippingInfo, setMessage) => {
    e.preventDefault();
    updateShippingInfo(user, newShippingInfo, setNewShippingInfo, setMessage);
}

const handleChangeShippingInfo = (e, user, setUser) => {
    e.preventDefault();
    setUser({
            ...user,
            [e.currentTarget.name]: e.target.value
        }
    );
}

export {
    handleChangeShippingInfo,
    handleShippingInfo
};