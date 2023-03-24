const userModel = require('../../models/user');

module.exports = {
  // GET /users
  index: async (req, res) => {

    res.json(await userDB.index());
  },
  // POST /users
  create: async (req, res) => {
    const user = req.body;
    const userDB = new userModel(user);
    res.json(await userDB.store());
  }
}