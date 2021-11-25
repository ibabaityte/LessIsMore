import {updateShippingInfo} from "./shippingInfoUtils";

const handleShippingInfo = (e, user, newShippingInfo, setNewShippingInfo, setMessage) => {
    e.preventDefault();
    updateShippingInfo(user, newShippingInfo, setNewShippingInfo, setMessage);
}

const handleChangeShippingInfo = (e, info, setNewShippingInfo) => {
    e.preventDefault();
    setNewShippingInfo({
            ...info,
            [e.currentTarget.name]: e.target.value
        }
    );
}

export {
    handleChangeShippingInfo,
    handleShippingInfo
};