var c = require('mongodb').MongoClient;
var url ="mongodb+srv://harshita_jaiswani_:Mongodb123@cluster0.v1ctf.mongodb.net/college";
c.connect(url, function(err, db) {
 if (err) throw err;
 var s = db.db("college");
 
 var co=[{
    "name":"SJT",
    "location": {
    "lat": 12.969791,
    "lon":79.163571,
    }
},

    {
        "name":"TT",
        "location": {
        "lat": 12.971029,
        "lon":79.159564,
        }
    },
        {
            "name":"MB",
            "location": {
            "lat":12.969511 ,
            "lon":79.155837,
            }
        },
            {
                "name":"GDN",
                "location": {
                "lat":12.969759 ,
                "lon":79.154816,
                }
            },
                {
                    "name":"CDMM",
                    "location": {
                    "lat": 12.969485,
                    "lon":79.155202,
                    }
                },
                    {
                        "name":"SMV",
                        "location": {
                        "lat":12.968989 ,
                        "lon":79.145977,
                        }
                    }];
 console.log(co);


  s.collection("buildings").insertMany(co, function(err, res) {
 if (err) throw err;
 console.log("(ii)" + res.insertedCount + "Building data inserted\n");
 });
});
