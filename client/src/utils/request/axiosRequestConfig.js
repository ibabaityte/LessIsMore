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

let generateAuthConfig = () => {
    return {
        'headers': {
            'Authorization': localStorage.getItem('userToken')
        }
    };
}

export {
    generateRequestConfig,
    generateAuthConfig
};