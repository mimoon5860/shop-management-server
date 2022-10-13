const UserModel = require("../../models/userModel");

// Register an user 
module.exports.createUser = async (registerInput) => {
    const user = new UserModel(registerInput);
    await user.save();
    return {
        success: true,
        data: {
            id: user.id,
            name: registerInput.name,
            email: registerInput.email,
            phone: registerInput.phone
        }
    }
}

// login an user
module.exports.loginUser = async ({ email, password }) => {
    const user = await UserModel.findOne({ email, password })
    return { success: true, data: user };
}