// creating an object with necessary info to send to request
const infoToUpdate = (req) => {
    let object = {};
    for (let i in req.body) {
        object[i] = req.body[i];
    }
    return object;
};

// testing if email has a valid format
const testEmail = (req) => {
    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailFormat.test(String(req.body.email).toLowerCase());
};

// testing if password contains at least one number
const testPassword = (req) => {
    const number = /\d/;
    return number.test(req.body.password);
};

export {infoToUpdate, testEmail, testPassword};