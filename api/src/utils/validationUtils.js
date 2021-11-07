const inputValidation = (req) => {
    // validating
    for(let i in req.body) {
        if(!req.body[i]) {
            return false;
        }
    }
};

export {inputValidation};