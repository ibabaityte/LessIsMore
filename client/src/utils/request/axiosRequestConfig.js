let generateRequestConfig = () => {
    return {
        'headers': {
            'Authorization': localStorage.getItem('userToken'),
        },
        'params': {
            'favorites': true
        }
    };
};

let generateCreateProductConfig = () => {
    return {
        'headers': {
            'Authorization': localStorage.getItem('userToken')
        }
    };
}

export {
    generateRequestConfig,
    generateCreateProductConfig
};