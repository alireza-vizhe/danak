const User = require("../module/UserModel");

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

exports.newUser = async (req, res) => {
    try {
        await User.create(req.body);
        res.json({ message: "کاربر با موفقیت ساخته شد" });
    } catch (error) {
        console.log(error);
    }
}