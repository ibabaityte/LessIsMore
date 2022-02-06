let generateRequestConfig = () => {
    return {
        'headers': {
            'Authorization': localStorage.getItem('userToken')
        },
        'params': {
            'favorites': true
        }
    };
};

let generateAuthConfig = () => {
    return {
        'headers': {
            'Authorization': localStorage.getItem('userToken')
        }
    };
}

let generateCartConfig = () => {
    return {
        'headers': {
            'Authorization': localStorage.getItem('userToken'),
            'UserId': localStorage.getItem('userId')
        }
    }
}

let generateRemoveFromCartConfig = (cartItemId) => {
    return {
        'headers': {
            'Authorization': localStorage.getItem('userToken'),
            'CartItemId': cartItemId
        }
    }
}

export {
    generateRequestConfig,
    generateAuthConfig,
    generateCartConfig,
    generateRemoveFromCartConfig
};