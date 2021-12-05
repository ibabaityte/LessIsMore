import {subscribe} from "./subscriberUtils";

const handleChangeSubscribe = (e, setSubscriberEmail) => {
    e.preventDefault();
    setSubscriberEmail(e.target.value);
}

const handleSubscribe = (e, subscriberEmail, setMessage, setCode) => {
    e.preventDefault();
    subscribe(subscriberEmail, setMessage, setCode);
};

export {
    handleChangeSubscribe,
    handleSubscribe
};