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

let generateCartConfig = (idArray) => {
    return {
        'headers': {
            'Authorization': localStorage.getItem('userToken')
        },
        'params': {idArray}
    }
};

export {
    generateRequestConfig,
    generateAuthConfig,
    generateCartConfig
};