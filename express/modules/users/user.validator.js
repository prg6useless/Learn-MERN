const Joi = require("joi");

const schema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }).required(),
});

// middleware definition
const validator = async (req, res, next) => {
  try {
    const { email } = req.body;
    await schema.validateAsync({ email });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { validator };
