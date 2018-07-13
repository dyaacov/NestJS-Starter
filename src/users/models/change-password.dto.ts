const Joi = require('joi')

export const ChangePasswordValidator = Joi.object().keys({
    id: Joi.string(),
    oldPassword: Joi.string(),
    newPassword: Joi.string()
})