const CustomErrorAPI = require("../errors/custom-error");

const errorHandlerMiddleWare = (err, req, res, next) => {
  if (err instanceof CustomErrorAPI) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(500).send("Something went wrong, please try again.");
};

module.exports = errorHandlerMiddleWare;
