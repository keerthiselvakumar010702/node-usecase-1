const Joi = require('joi');
//schema for creation
insertuser =Joi.object().keys({
    id:Joi.required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(3).max(10).required(),
    phone:Joi.required(),
    username:Joi.string().required(),
});

//schema for updation
updateuser =Joi.object().keys({
    id:Joi.optional(),
    email:Joi.string().email().optional(),
    password:Joi.string().min(3).max(10).optional(),
    phone:Joi.optional(),
    username:Joi.string().optional(),
});

module.exports ={insertuser,updateuser}