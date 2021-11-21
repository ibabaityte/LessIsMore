// creating an object with necessary info to send to request
const infoToUpdate = (req) => {
    let object = {};
    for (let i in req.body) {
        object[i] = req.body[i];
    }
    return object;
};

export {infoToUpdate};