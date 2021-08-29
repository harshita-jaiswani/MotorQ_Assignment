var c = require('mongodb').MongoClient;
var url ="mongodb+srv://harshita_jaiswani_:Mongodb123@cluster0.v1ctf.mongodb.net/college";
function time(a)
{
    if(a>12)
    return a-12+"pm";
    else if(a<12)
    return a+"am";
    return a+"pm";
}
c.connect(url, function(err, db) {
 if (err) throw err;
 var s = db.db("college");
 obj=[];
 const b=["SJT","TT","MB","GDN","CDMM","SMV"];
 const c=["CSE1001", "CSE1002", "CSE1003", "CSE1004", "CSE1005", "CSE1006", "CSE1007", "CSE1008", "CSE1009", "CSE1010"];
 const d=['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
 for(let i=0;i<100;i++)
 {
     const cl={};
     cl["id"]=i+1+"";
     const j=Math.floor(Math.random()*50)+1;
     cl["courseCode"]=c[Math.floor(Math.random()*c.length)];
     cl["faculty"]="Faculty "+Math.floor(Math.random()*c.length)+1;
     cl["building"]=b[Math.floor(Math.random()*b.length)];
     const t=Math.floor(Math.random()*10)+8;
     const da=d[Math.floor(Math.random()*d.length)];
    cl["time"]=da+" "+time(t)+"-"+time(t+1);
    obj.push(cl);
 }
 console.log(obj);

 s.collection("classes").insertMany(obj, function(err, res) {
 if (err) throw err;
 console.log("(ii)" + res.insertedCount + "Class data inserted\n");
 });
});