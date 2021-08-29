var c = require('mongodb').MongoClient;
var url ="mongodb+srv://harshita_jaiswani_:Mongodb123@cluster0.v1ctf.mongodb.net/college";
c.connect(url, function(err, db) {
 if (err) throw err;
 var s = db.db("college");
 const co=[{
    "id": "CSE1001",
    "name": "OS"
   },
   {
    "id": "CSE1002",
    "name": "DSA",
   },
   {
    "id": "CSE1003",
    "name": "DCCN",
   },
   {
    "id": "CSE1004",
    "name": "DBMS",
   },
   {
    "id": "CSE1005",
    "name": "WEB-TECH",
   },
   {
    "id": "CSE1006",
    "name": "CRYPTOGRAPHY",
   },
   {
    "id": "CSE1007",
    "name": "NIS",
   },
   {
    "id": "CSE1008",
    "name": "AI",
   },
   {
    "id": "CSE1009",
    "name": "ML",
   },
   {
    "id": "CSE1010",
    "name": "BIG-DATA",
   }];

 console.log(co);
 s.collection("course").insertMany(co, function(err, res) {
 if (err) throw err;
 console.log("(ii)" + res.insertedCount + " Course data inserted\n");
 });
});