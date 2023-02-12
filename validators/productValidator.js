import Joi from "joi";

const storeValidator = (req,res,next)=>{
    const storeSchema = Joi.object({
        name:Joi.string().required(),
        decription:Joi.string().required(),
        category:Joi.string().required(),
        price:Joi.number().required(),
        image:Joi.string(),
    }); 
    const { error } = storeSchema.validate(req.body);
    if (error) {
        return next(error);
    }
    return next();
}

export {storeValidator}