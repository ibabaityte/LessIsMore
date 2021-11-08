import Subscriber from "../models/subscriber.js";

const create = (req, res) => {
    const newSubscriber = new Subscriber({
        email: req.body.email
    });

    newSubscriber.save().then(data => {
        res.status(200).send({
            code: "200",
            message: "You have subscribed to our newsletter!",
            data: data
        });
    }).catch(err => {
        console.log(err);
        return res.status(500).send({
            code: "500",
            message: "Some error occurred while trying to subscribe to our newsletter."
        });
    });
};

const list = (req, res) => {
    Subscriber.find({"userType": "USER"})
        .then(data => {
            res.status(200).send(data);
        }).catch(err => {
            console.log(err);
            res.status(500).send({
                code: "500",
                message: "An error occurred while retrieving subscriber list"
            });
    });
};

export default {create, list};