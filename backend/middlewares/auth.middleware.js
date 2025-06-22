const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.authUser = async (req, res, next)  => {

    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const isBlacklistToken = await blacklistTokenModel.findOne({ token });
    if (isBlacklistToken) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        if (!user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.user = user; // Attach user to request object
        return next(); // Call the next middleware or route handler

    }catch (error) {
        return res.status(401).json({ message: "Unauthorized" });
    }

}