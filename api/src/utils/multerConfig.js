import multer from "multer";
import path from "path";

export default multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let extension = path.extname(file.originalname);
        if (extension !== ".jpg" && extension !== ".jpeg" && extension !== ".png") {
            cb(new Error ("File type is not supported"), false);
            return;
        }
        cb(null, true);
    }
});