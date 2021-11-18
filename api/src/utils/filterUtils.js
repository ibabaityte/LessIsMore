const generateFilterConfig = (req) => {
    const category = req.query.category;

    if(category) {
        return {
            'userType': "USER",
            'category': category
        };
    } else {
        return {
            'userType': "USER"
        };
    }
}

export {
    generateFilterConfig
};