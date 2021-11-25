import {subscribe} from "./subscriberUtils";

const handleChangeSubscribe = (e, setSubscriberEmail) => {
    e.preventDefault();
    setSubscriberEmail(e.target.value);
}

const handleSubscribe = (e, subscriberEmail, setMessage) => {
    e.preventDefault();
    subscribe(subscriberEmail, setMessage);
};

export {
    handleChangeSubscribe,
    handleSubscribe
};