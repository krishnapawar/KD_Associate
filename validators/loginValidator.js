import Joi from "joi";
const authValidator= Joi.object({
  email:Joi.string().email().required(),
  password:Joi.required(),
});
export default authValidator;