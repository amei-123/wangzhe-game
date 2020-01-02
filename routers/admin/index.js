module.exports = app => {
    const express = require('express');
    const jwt = require('jsonwebtoken');
    const assert = require('http-assert')
    const AdminUser = require('../../models/AdminUser');
    const router = express.Router({
        mergeParams: true  //作用:子路由能够继承父路由的params
    });
    const middleAuth = require('../../middleware/auth')
    const middleResource = require('../../middleware/resource')
    router.post('/',async(req,res)=>{ //创建资源
        let reqData = req.body;
        let data = await req.Model.create(req.body);
        res.send(data)
    })
    router.put('/:_id',(req,res)=>{ //修改单个数据
        req.Model.findByIdAndUpdate(req.params._id,req.body).then(data=>{
            res.send(data)
        }).catch(err=>{console.log(err)})
    })

    router.get('/',(req,res)=>{ //获取全部资源
        const queryOptions = {};
        // console.log(req.Model);
        if(req.Model.modelName === 'category'){
            queryOptions.populate = 'parent'
        }
        req.Model.find().setOptions(queryOptions).limit(100).then(data=>{
            res.send(data);
        })
    })

    router.get('/:_id',(req,res)=>{ //查询单个数据
        req.Model.findById(req.params._id).then(data=>{
            res.send(data);
        })
    })

    router.delete('/:_id',(req,res)=>{ //删除资源
        req.Model.findByIdAndDelete(req.params._id).then(data=>{
            res.send(data);
        })
    })
    app.use('/admin/api/rest/:resource',middleAuth(),middleResource(),router);

    const multer = require('multer');
    const path = require('path')
    const upload = multer({
        dest: path.join(__dirname,'../../uploads')
    });
    app.post('/admin/api/uploads',middleAuth(),upload.single('file'),(req,res,next)=>{
        const url = 'http://localhost:3333/uploads/'+ req.file.filename;
        req.file.url = url;
        res.send(req.file);
    })

    //登录
    app.post('/admin/api/login',async(req,res)=>{
        const {username,password} = req.body;
        const user = await AdminUser.findOne({username});
        //检查用户名
        assert(user,422,'用户名错误')

        //检查密码
        const result = require('bcrypt-nodejs').compareSync(password,user.password);//为啥非得用同步，错误处理函数才生效呢？？
        assert(result,422,'密码错误')
        //否则返回token
        const token = jwt.sign({id:user._id},app.set('secret'));
        res.send({token});
    })


    //错误处理函数
    // app.use(async (err, req, res, next) => {
    //     res.status(err.statusCode || 500).send({
    //       message: err.message
    //     })
    // })
}