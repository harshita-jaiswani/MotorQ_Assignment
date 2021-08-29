const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  rollNo: {
    type: String,
    required: true,
    unique: true
  },
  name:{
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true
  },
  // https://stackoverflow.com/questions/17497875/storing-json-object-in-mongoose-string-key
  classes:[String]
}, {
  timestamps: true,
});

const Student = mongoose.model('Students', studentSchema);

module.exports = Student;