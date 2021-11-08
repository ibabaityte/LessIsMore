import Coupon from "../models/coupon.js";
import {inputValidation} from "../utils/validationUtils.js";

const create = (req, res) => {
    if(inputValidation(req) === false) {
        return res.status(400).send({
            code: "400",
            message: "All fields must be completed"
        });
    }

    const newCoupon = new Coupon({
        code: req.body.code,
        expiryDateHours: req.body.expiryDateHours
    });

    newCoupon.save().then(data => {
        res.status(200).send({
            code: "200",
            message: "New coupon created",
            data: data
        });
    }).catch(err => {
        console.log(err);
        return res.status(500).send({
            code: "500",
            message: "Some error occurred while creating a coupon code"
        });
    });
};

const remove = (req, res) => {
      Coupon.findByIdAndRemove(req.params.id).then(data => {
          if(!data) {
              return res.status(404).send({
                  code: "404",
                  message: "Coupon not found with id " + req.params.id
              });
          }
          res.status(200).send({
              code: "200",
              message: "Coupon expired"
          });
      }).catch(err => {
          console.log(err);
          if(err.kind === "ObjectId" || err.name === "Not found") {
              return res.status(404).send({
                  code: "404",
                  message: "Coupon not found with id " + req.params.id
              });
          }
          return res.status(500).send({
              code: "500",
              message: "An error occurred while trying to delete coupon"
          });
      });
};

export default {create, remove};