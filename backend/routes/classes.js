const router = require('express').Router();
let classes = require('../models/classes');
let student = require('../models/student.model');


router.route('/:cc').get((req, res) => {
  classes.find({courseCode:req.params.cc})
    .then(s => res.send(s))
    .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;