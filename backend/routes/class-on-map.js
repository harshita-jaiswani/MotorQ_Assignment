const router = require('express').Router();
let Buliding = require('../models/building');
var request = require('request');
const { ListSubheader } = require('@material-ui/core');


function load(body)
{
    const myPromise = new Promise((resolve, reject) => {  
  request({
        url: 'http://localhost:5000/students', //on 3000 put your port no.
        method: 'GET'
    }, function (error, response, b) {
     const k=JSON.parse(b);
    //  for(var j=0;j<body.length;j++){
    //      body[j]["studentsRegistered"]=0;
    //  for(var i=0;i<k.length;i++)
    //  {
    //      if(k[i].classes.indexOf(body[j].id)!=-1)
    //      body[j]["studentsRegistered"]+=1;
    //  }
    //  Buliding.findOne({name:body[j].building})
    //  .then(s =>console.log(s.location))
    //  .catch(err => res.status(400).json('Error: ' + err));
    // }
    })});
    myPromise.then(()=>{
        return body;
    })        
    
}
router.route('/:cid').get((req, res) => {
    request({
        url: 'http://localhost:5000/classes/'+req.params.cid, //on 3000 put your port no.
        method: 'GET'
    }, function (error, response, body) {
      res.send(load(JSON.parse(body)));
    });
  });
module.exports = router;