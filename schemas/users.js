var mongoose = require('mongoose');
var Schema = mongoose.Schema

//新建约束
var usersSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    
    password:{
        type:String
    }
})
// 用户的表结构
// module.exports = new mongoose.Schema({
//     // 用户名
//     username:String,
//     // 密码
//     password:String

// })

module.exports = mongoose.model('User',usersSchema);