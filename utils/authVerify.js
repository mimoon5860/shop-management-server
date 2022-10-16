const jwt = require('jsonwebtoken');
require('dotenv').config();
const checkAuth = async (token) => {
    try {
        jwt.verify(token, process.env.JWT_SECRET);
        return false;
    } catch (err) {
        return "Unauthorized access or invalid token, Please add token you got after login or register into headers as Authorization"
    }
}
module.exports = checkAuth;