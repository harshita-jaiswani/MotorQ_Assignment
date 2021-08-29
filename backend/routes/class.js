const router = require('express').Router();
let classes = require('../models/classes');
let student = require('../models/student.model');
var request = require('request');
async function fun(res,s)
{
     classes.find({id:[...s.classes]})
    .then(s =>  res.send(s))
    .catch(err => res.status(400).json('Error: ' + err));
}

function stdpost(res,d,req,c)//json containing class
{
  classes.findOne({id:req.body.class})
    .then((s) => {
      const t=s.time;
      const cl=[];
      let i=0;
      for(;i<d.length;i++)
      {
        if(d[i]["time"]==t){
        res.send("Slot Clashed");
        return;
        }
        cl.push(d[i]["id"]);
      }
      cl.push(c);
      student.findOneAndUpdate({"rollNo": req.params.sid}, {"classes": cl}, {new: true}, (err, updatedDoc) => {
        if(err) return console.log(err);
      })
      res.send("Added");
    })
    .catch(err => res.status(400).json('Error: ' + err));
 }
router.route('/:sid').post((req, res) => {
  request({
    url: 'http://localhost:5000/class/'+req.params.sid, //on 3000 put your port no.
    method: 'GET'
}, function (error, response, body) {
  stdpost(res,JSON.parse(body),req,req.body.class);
});
});

router.route('/:sid').get((req, res) => {
    student.findOne({rollNo:req.params.sid})
      .then(s =>fun(res,s))
      .catch(err => res.status(400).json('Error: ' + err));
  });

  router.route('/:sid/:cid').post((req, res) => {
    student.findOne({rollNo:req.params.sid})
      .then(s =>{
        const cl=s.classes;
        var i=0;
        for( ; i < cl.length; i++)    
        if ( cl[i] == req.params.cid) { 
            cl.splice(i, 1); 
            break;
        }
        if(i==cl.length)
        res.send("Not found");
        student.findOneAndUpdate({"rollNo": req.params.sid}, {"classes": cl}, {new: true}, (err, updatedDoc) => {
          if(err) return console.log(err);
        })
        res.send("Removed");
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });


module.exports = router;