import joi from 'joi'

const signinSchema = joi.object({
    mail: joi.string().required().email({ minDomainSegments: 2 }).min(8).max(50).messages({
        'string.min': "mail must have at least 8 characters please",
        'string.max': "mail must be less than 51 characters please",
        'any.required': "name is required", //Para cuando no se envia el dato
        'string.empty': "name is required", //Cuando se envia vacio
        'string.email': 'mail is not valid (example@example.com)',
    }),
    password: joi.string().required().min(8).max(20).messages({
        'string.min': "password must have at least 8 characters please",
        'string.max': "password must be less than 21 characters please",
        'any.required': "password is required", //Para cuando no se envia el dato
        'string.empty': "password is required", //Cuando se envia vacio,
    })
})

export default signinSchema

