const validateRequest = (schema) => (req, _res, next) => {
  try {
    schema.parse({ body: req.body, params: req.params, query: req.query });
    next();
  } catch (error) {
    error.status = 400;
    next(error);
  }
};

module.exports = { validateRequest };
