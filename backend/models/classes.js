const mongoose = require('mongoose');

   const Schema = mongoose.Schema;
   
   const classSchema = new Schema({
     id: {
       type: String,
       required: true,
       unique: true,
       index: true
     },
     courseCode:{
       type: String,
       required: true,
     },
     faculty:{
       type:String,
       required:true
     },

     building:{
        type:String,
        required:true
      },
      time:{
        type:String,
        required:true
      }

    }, {
     timestamps: true,
   });
   
   const Class = mongoose.model('class', classSchema);
   
   module.exports = Class;