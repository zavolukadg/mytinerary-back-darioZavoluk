import joi from 'joi'

const registerSchema = joi.object({
    mail: joi.string().required().email({ minDomainSegments: 2 }).min(8).max(40).messages({
        'string.min': "mail must have at least 8 characters please",
        'string.max': "mail must be less than 41 characters please",
        'any.required': "mail is required", //Para cuando no se envia el dato
        'string.empty': "mail is required",
        'string.email': 'mail is not valid (example@example.com)'
    }),  
    password: joi.string().required().min(8).max(20).messages({
        'string.min': "password must have at least 8 characters please",
        'string.max': "password must be less than 21 characters please",
        'any.required': "password is required", //Para cuando no se envia el dato
        'string.empty': "password is required",
    }),
    name: joi.string().required().min(3).max(30).messages({
        'string.min': "name must have at least 3 characters please",
        'string.max': "name must be less than 31 characters please",
        'any.required': "name is required", //Para cuando no se envia el dato
        'string.empty': "name is required", //Cuando se envia vacio
    }),
    lastName: joi.string().empty('').min(3).max(20).messages({ 
        'string.min': "name must have at least 3 characters please",
        'string.max': "name must be less than 21 characters please",
    }), 
    photo: joi.string().min(5).messages({ 
        'string.min': "photo must have at least 5 characters please",
    }),
    country: joi.string().required(),
})

export default registerSchema
