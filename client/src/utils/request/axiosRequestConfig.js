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
            'Authorization': localStorage.getItem('userToken'),
            'Content-Type': 'multipart/form-data'

        }
    };
}

export {
    generateRequestConfig,
    generateCreateProductConfig
};