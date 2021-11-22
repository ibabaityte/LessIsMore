let generateRequestConfig = () => {
    return {
        'headers':
            {
            'Authorization': localStorage.getItem('userToken')
        },
        'params': {
            'favorites': true
        }
    };
};

export {
    generateRequestConfig,
};