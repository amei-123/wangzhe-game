module.exports = options => {
    const jwt = require('jsonwebtoken');
    const assert = require('http-assert')
    const AdminUser = require('../models/AdminUser');
   return async (req,res,next)=>{
        const token =  String(req.headers.authorization || '').split(' ').pop();
        //没有token
        assert(token,401,'请先登录');

        //token解密
        const {id} = jwt.verify(token,req.app.get('secret')); //注意！！！req.app ＆app 指向的是同一个地址
        //没有id
        assert(id,401,'请先登录');

        req.user = await AdminUser.findById(id);
        //验证失败
        assert(req.user,401,'请先登录');

       await next();
    };
}