const Post = require("../module/PostModel");
const Carousel = require("../module/Carousel");
const Projects = require("../module/Projects");

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        console.log(error);
    }
}

exports.deletePost = async (req, res) => {

    const { id } = req.body;

    try {
        await Post.deleteOne({ _id: id });
        res.json(`محصول با ایدی ${id} پاک شد`)
    } catch (error) {
        console.log(error);
    }
}

exports.updatePost = async (req, res) => {

    const { id } = req.body

    try {
        const post = await Post.findOne({ _id: id })
        post.name = req.body.name;
        post.price = req.body.price;
        post.description = req.body.description;
        post.category = req.body.category;
        post.status = req.body.status;
        post.img = req.body.img

        res.json({ message: "پست مورد نظر با موفقیت تغییر یافت" })

    } catch (error) {
        console.log(error);
    }
}

exports.getCarouselImages = async (req, res) => {
    try {
        res.json(await Carousel.find());
    } catch (error) {
        res.json({ message: "مشکلی از سمت سرور پیش آمده است" })
    }
}

exports.deleteCarouselImages = async (req, res) => {

    const { id } = req.body;

    try {
        await Carousel.deleteOne({ _id: id })
        res.json({ message: "عکس مورد نظر با موفقیت پاک شد" });
    } catch (error) {
        res.json(error)
    }
}

exports.getProjetcs = async (req, res) => {
    try {
        res.json(await Projects.find());
    } catch (error) {
        res.json(error)
    }
}
exports.deleteProjects = async (req, res) => {

    const { id } = req.body;

    try {
        await Projects.deleteOne({ _id: id });
        res.json({ message: "پروژه مد نظر با موفقیت پاک شد" });
    } catch (error) {
        res.json(error)
    }
}