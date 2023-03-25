const models = require("../models");
const User = models.User;

const getUsers = async (req, res) => {
  try {
    await User.findAll()
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((error) => {
        res.send(console.log(error));
      });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getUsers,
};
