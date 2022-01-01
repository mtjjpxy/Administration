var mongoose =require('mongoose');

//建立数据库链接
//mongoose.connect('mongode://mongodb://172.21.2.236:27017/190110910318')
var url = process.env.DATABASE_URL || "mongodb://172.21.2.236:27017/190110910318";
//var url = process.env.DATABASE_URL || "mongodb://localhost:27017/190110910318";
mongoose.connect(url, {
        useNewUrlParser: true
    })
    .then(() => console.log("Connection Successful"))
    .catch(err => console.log(err));
var Schema = mongoose.Schema

//新建约束
var studentSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    gender:{
        type:Number,
        enum:[0,1],
        default:0
    },
    age:{
        type:Number
    },
    state:{
        type:String
    }
})
//导出模板构造函数
module.exports = mongoose.model('Student',studentSchema);