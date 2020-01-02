const express = require('express');
const app = express();
app.listen(3333,()=>{
    console.log('3333端口监听成功')
})

app.set('secret','dsafdf')

app.use('/',express.static(__dirname+'/web')); //前端web页面
app.use('/admin',express.static(__dirname+'/admin')) //后台管理页面
app.use('/uploads',express.static(__dirname+'/uploads')) 
app.use(require('cors')()); //允许跨域
app.use(express.json()); 

require('./plugins/db.js')(app); //连接数据库
require ('./routers/admin/index.js')(app); //创建后台admin端口
require('./routers/web/index.js')(app); //方便传入一些假数据
