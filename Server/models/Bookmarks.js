const mongoose = require('mongoose')


exports.bookmarksSchema = new mongoose.Schema({
    plantName:{type:String,required:true},
    
})