let generateRequestConfig = () => {
    return {
        'headers': {
            'Authorization': localStorage.getItem('userToken')
        }
    };
};

export {
    generateRequestConfig,
};