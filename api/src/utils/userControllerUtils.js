// creating an object with necessary info to send to request
import Product from "../models/product.js";
import cloudinary from "./cloudinaryConfig.js";

const infoToUpdate = async (req) => {
    let object = {};
    if (req.file) {
        let product = await Product.findById(req.params.id);
        await cloudinary.uploader.destroy(product.cloudinaryId);
        const cloudinaryResult = await cloudinary.uploader.upload(req.file.path);
        object["image"] = cloudinaryResult.secure_url;
        object["cloudinaryId"] = cloudinaryResult.public_id;
        for (let i in req.body) {
            object[i] = await req.body[i];
        }
        return object;
    } else {
        for (let i in req.body) {
            object[i] = await req.body[i];
        }
        // console.log(object);
        return object;
    }
};

export {infoToUpdate};