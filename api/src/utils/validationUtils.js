const inputValidation = (req) => {
    // validating
    for (let i in req.body) {
        if (!req.body[i] || req.body[i] === '') {
            return false;
        }
    }
    return true;
};

// testing if email has a valid format
const testEmail = (input) => {
    const emailFormat = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailFormat.test(String(input).toLowerCase());
};

// testing if password contains at least one number
const testPassword = (input) => {
    const number = /\d/;
    return number.test(input);
};

const isUpperCase = (input) => {
      return /[A-Z]/.test(input.charAt(0));
};

export {
    inputValidation,
    testEmail,
    testPassword,
    isUpperCase
};