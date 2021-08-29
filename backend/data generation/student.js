var c = require('mongodb').MongoClient;
var url ="mongodb+srv://harshita_jaiswani_:Mongodb123@cluster0.v1ctf.mongodb.net/college";
//https://www.geeksforgeeks.org/how-to-generate-a-random-password-using-javascript/#:~:text=Approach%201%3A%20Make%20a%20string,l%20is%20length%20of%20string).
function generateP() {
    var pass = '';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
            'abcdefghijklmnopqrstuvwxyz0123456789@#$';
      
    for (i = 1; i <= 8; i++) {
        var char = Math.floor(Math.random()
                    * str.length + 1);
          
        pass += str.charAt(char)
    }
      
    return pass;
}
function pad(n)
{
    if(n<10)
    return "00"+n;
    else if(n<100)
    return "0"+n;
    return n;
}
c.connect(url, function(err, db) {
 if (err) throw err;
 var s = db.db("college");
 obj=[];
 const br=["BCE","BIT","BDS","BME","BCI"]

 for(let i=0;i<2000;i++)
 {
     const cl={};
     cl["rollNo"]=Math.floor(i/500)+18+""+br[Math.floor(i/100)%5]+""+pad(1+i%100);
     cl["name"]="Student"+i+1;
     cl["password"]= generateP();
     obj.push(cl);
 }
 console.log(obj);

 s.collection("students").insertMany(obj, function(err, res) {
 if (err) throw err;
 console.log("(ii)" + res.insertedCount + "Student data inserted\n");
 });
});