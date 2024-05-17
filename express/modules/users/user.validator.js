const Joi = require("joi");

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    })
    .required(),
  password: Joi.string().required(),
  roles: Joi.array().items(Joi.string().valid("admin", "user")),
  image: Joi.string(),
  isVerified: Joi.boolean(),
  isActive: Joi.boolean(),
});

// middleware definition
const validator = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    await schema.validateAsync({ name,password,email });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = { validator };
