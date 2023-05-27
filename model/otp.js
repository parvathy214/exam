const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://p4parvathy214:Lekhaatlas@cluster0.ndcrk8y.mongodb.net/Exam?retryWrites=true&w=majority`,{useNewUrlParser: true})
.then(() => {
    console.log("Database Connection Successful")
   }).catch((err) => {
    console.log(err)
   })

const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    email: String,
    otp:Number
   }, {
    versionKey: false
   })

var user = mongoose.model('user', NewUserSchema);
module.exports = user;