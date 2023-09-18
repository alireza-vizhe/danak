const express = require("express");

const dotenv = require("dotenv");
const connectDB = require("./config/db");
const sharp = require("sharp");
const multer = require("multer");
const Carousel = require("./module/Carousel");
const Projects = require("./module/Projects");
const { setHeaders } = require("./middlewares/header");
const cors = require("cors")

const app = express();

app.use(cors());
app.use(express.json())
dotenv.config({ path: "./config/config.env" })
app.use(setHeaders)

connectDB();


//! Upload Image post
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post("/new-post", upload.single("textImage"), function (req, res) {
    console.log("filre", req.file, "dataaaaaaa", req.body);
    const { recaptchaValue } = req.body;
    // axios({
    //   url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${recaptchaValue}`,
    //   method: "POST",
    // })
    //   .then(async ({ data }) => {
    //     if (!data.success) {
    //       console.log("datablulu", data);
    try {
        sharp(req.file.buffer)
            .resize(1080, 1080)
            .jpeg({ quality: 30 })
            .toBuffer()
            .then((data) => {
                console.log(req.file, "adsdasadasdadsadadasdsada");
                const saveImage = new Post({
                    ...req.body,
                    pName: req.body.pName,
                    img: {
                        data: data,
                        contentType: req.file.mimeType,
                    },
                    // category: req.body.category,
                    // pPrice: req.body.pPrice,
                    // pAmount: req.body.pAmount
                    // user: req.userId,
                    // userId: req.body.userId,
                    // for: req.body.for,
                });
                // saveImage.inTheFuture = req.body.inTheFuture
                saveImage
                    .save()
                    .then(() => {
                        console.log("saved");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                res.json({ messageSUC: "savedddd" });
            });
    } catch (error) {
        console.log("fgfgfgfgfg");
    }
    //   } else {
    //     res.json({ message: "  در اعتبار سنجی کپچا پیش آمد" });
    //   }
    // })
    // .catch((error) => {
    //   res.json({ message: "کپچا نا معتبر است" });
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
});




//! Upload Image Carousel

app.post("/new-carousel-image", upload.single("textImage"), function (req, res) {
    console.log("filre", req.file, "dataaaaaaa", req.body);
    const { recaptchaValue } = req.body;
    // axios({
    //   url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${recaptchaValue}`,
    //   method: "POST",
    // })
    //   .then(async ({ data }) => {
    //     if (!data.success) {
    //       console.log("datablulu", data);
    try {
        sharp(req.file.buffer)
            .resize(1080, 1080)
            .jpeg({ quality: 30 })
            .toBuffer()
            .then((data) => {
                console.log(req.file, "adsdasadasdadsadadasdsada");
                const saveImage = new Carousel({
                    ...req.body,
                    name: req.body.name,
                    img: {
                        data: data,
                        contentType: req.file.mimeType,
                    },
                    // category: req.body.category,
                    // pPrice: req.body.pPrice,
                    // pAmount: req.body.pAmount
                    // user: req.userId,
                    // userId: req.body.userId,
                    // for: req.body.for,
                });
                // saveImage.inTheFuture = req.body.inTheFuture
                saveImage
                    .save()
                    .then(() => {
                        console.log("saved");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                res.json({ messageSUC: "savedddd" });
            });
    } catch (error) {
        console.log("fgfgfgfgfg");
    }
    //   } else {
    //     res.json({ message: "  در اعتبار سنجی کپچا پیش آمد" });
    //   }
    // })
    // .catch((error) => {
    //   res.json({ message: "کپچا نا معتبر است" });
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
});



//! Upload Image Project

app.post("/new-project", upload.single("textImage"), function (req, res) {
    console.log("filre", req.file, "dataaaaaaa", req.body);
    const { recaptchaValue } = req.body;
    // axios({
    //   url: `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.CAPTCHA_SECRET}&response=${recaptchaValue}`,
    //   method: "POST",
    // })
    //   .then(async ({ data }) => {
    //     if (!data.success) {
    //       console.log("datablulu", data);
    try {
        sharp(req.file.buffer)
            .resize(1080, 1080)
            .jpeg({ quality: 30 })
            .toBuffer()
            .then((data) => {
                console.log(req.file, "adsdasadasdadsadadasdsada");
                const saveImage = new Projects({
                    ...req.body,
                    name: req.body.name,
                    img: {
                        data: data,
                        contentType: req.file.mimeType,
                    },
                    // category: req.body.category,
                    // pPrice: req.body.pPrice,
                    // pAmount: req.body.pAmount
                    // user: req.userId,
                    // userId: req.body.userId,
                    // for: req.body.for,
                });
                // saveImage.inTheFuture = req.body.inTheFuture
                saveImage
                    .save()
                    .then(() => {
                        console.log("saved");
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                res.json({ messageSUC: "savedddd" });
            });
    } catch (error) {
        console.log("fgfgfgfgfg");
    }
    //   } else {
    //     res.json({ message: "  در اعتبار سنجی کپچا پیش آمد" });
    //   }
    // })
    // .catch((error) => {
    //   res.json({ message: "کپچا نا معتبر است" });
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
});

app.use(require("./router/user"));
app.use(require("./router/admin"));
app.use(require("./module/Carousel"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server has started at port: ${PORT}`));