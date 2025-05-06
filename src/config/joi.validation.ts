import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({

    DB_PASSWORD: Joi.required(),
    DB_NAME: Joi.string(),
    DB_HOST: Joi.string(),
    DB_PORT: Joi.number(),
    DB_USERNAME: Joi.string(),
    PORT: Joi.number().default(3000),
    HOST_API: Joi.string()
    

})