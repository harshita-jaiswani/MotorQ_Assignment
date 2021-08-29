const mongoose = require('mongoose');

   const Schema = mongoose.Schema;
   
   const courseSchema = new Schema({
     id: {
       type: String,
       required: true,
       unique: true,
       index: true
     },
     name:{
       type: String,
       required: true,
     }

    }, {
     timestamps: true,
   });
   
   const Course= mongoose.model('Course', courseSchema);
   
module.exports = Course;