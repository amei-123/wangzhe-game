module.exports = options => {
    const jwt = require('jsonwebtoken');
    const assert = require('http-assert')
    const AdminUser = require('../models/AdminUser');
   return async(req,res,next)=>{
        const modelName = require('inflection').classify(req.params.resource);
        req.Model = require(`../models/${modelName}`)
        await next();
    }
}