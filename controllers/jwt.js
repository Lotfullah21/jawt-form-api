const CustomErrorAPI = require("../errors/custom-error");

const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomErrorAPI("please provide password and name", 400);
  }
  // dummy id
  const id = new Date().getDate();
  // in the first position, we add the payload, in later one the secret, and the last one is optional.
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ msg: "user created", token });
};
const dashboard = (req, res) => {
  console.log(req.headers);
  const randNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: `Hello ahmad`, code: `here is the code ${randNumber}` });
};

module.exports = { login, dashboard };
