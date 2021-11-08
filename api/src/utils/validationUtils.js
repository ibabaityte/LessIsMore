const inputValidation = (req) => {
    // validating
    for (let i in req.body) {
        if (!req.body[i] || req.body[i] === '') {
            return false;
        }
    }
    return true;
};

export {inputValidation};