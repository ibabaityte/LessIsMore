const generateFilterConfig = (req) => {
    const category = req.query.category;

    if(category === "all") {
        return {
            'userType': "USER"
        };
    } else {
        return {
            'userType': "USER",
            'category': category
        };
    }
}

export {
    generateFilterConfig
};