const CustomErrorAPI = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomErrorAPI("please provide password and name", 400);
  }
  res.send("Fake/Login");
};
const dashboard = (req, res) => {
  const randNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: `Hello ahmad`, code: `here is the code ${randNumber}` });
};

module.exports = { login, dashboard };
