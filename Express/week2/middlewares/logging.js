exports.log = (req, res, next) => {
  try {
    console.log(
      "The request methode is :",
      req.method,
      "the path is :",
      req.baseUrl+ req.url
    );
    next();
  } catch (err) {
    next("The error is on logging");
  }
};
