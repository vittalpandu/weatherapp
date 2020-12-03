const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("./db/conn");
const PersonData = require("./models/persons");
const cors = require('cors');
const bodyparser = require("body-parser");

const Nexmo = require('nexmo');

app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

const nexmo = new Nexmo({
    apiKey: '',
    apiSecret: 'mOmw1luiJgjszrrM',
  });

app.post("/person",(req, res) => {
    console.log(req.body);
    const user = new PersonData(req.body);
    user.save();
    res.send("yaay");
    res.end();
})

var dat=[];

app.post("/sendmsg", (req, res)=>{
     console.log(req.body);
     
    PersonData.find({villagename:req.body.village},function(err,docs){
        dat=docs;
        
        var timeSplit = req.body.time.split(':'),
        hours,
        minutes,
        meridian;
      hours = timeSplit[0];
      minutes = timeSplit[1];
      if (hours > 12) {
        meridian = 'PM';
        hours -= 12;
      } else if (hours < 12) {
        meridian = 'AM';
        if (hours === 0) {
          hours = 12;
        }
      } else {
        meridian = 'PM';
      }
      var time=`${hours}:${minutes} ${meridian}`
        
      const from = 'vvvvv APIs';
      const to = `91${dat[0].phone}`;
      const text = ` \n\nPURPOSE - ${req.body.purpose} \nVILLAGE - ${req.body.village} \nTIME - ${time} \n\n${req.body.message} \n\n\nGRAMIN DIGITAL BANDHU`;
      
        nexmo.message.sendSms(from, to, text);
        console.log('sent');
        res.send(docs);
    });
    
})

app.listen(port,() =>
{
    console.log("connection successful");
})
