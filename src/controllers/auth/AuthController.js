const userModel = require('../../models/user');

module.exports = {
  // post /auth
  logIn: async (req, res) => {
    const user = req.body;
    const userDB = new userModel(user);
    const userValidated = await userDB.validateLogin();
    res.json(userValidated);
  }
}