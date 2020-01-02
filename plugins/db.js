module.exports = app => { //连接数据库
    const mongoose = require('mongoose');
    mongoose.set('useFindAndModify', false); 
    mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    //把所有的数据库模型都引用了一遍
    require('require-all')(__dirname+'/../models')
}
