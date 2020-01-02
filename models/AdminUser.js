const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    username: {type:String},
    password: {
        type:String
    }

})

const bcrypt = require('bcrypt-nodejs')  
const SALT_WORK_FACTOR = 10;
 
 
schema.pre('save',function(next){
  var user = this
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt){
        if (err) {
            return next(err)
        }
        bcrypt.hash(user.password,salt,null,function(err,hash){
          if(err) return next(err)
            user.password = hash
            next()
        })
    })
})
module.exports = mongoose.model('admin_user',schema);