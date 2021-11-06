const infoToUpdate = (req) => {
    let object = {};
    for(let i in req.body) {
        object[i] = req.body[i];
    }
    return object;
};

const userUpdateValidation = (req) => {
    // validating
    for(let i in req.body) {
        if(!req.body[i]) {
            return false;
        }
    }
};

export {infoToUpdate, userUpdateValidation};