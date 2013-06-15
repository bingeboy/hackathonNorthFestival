var express = require('express');
var client = require('twilio')('ACdcbc978cc4ccab97d42e78746ab84286', '6addc9603fbb8087559a529996dc789a');

var app = express();
var port = 2001;


var x = 1;
/* //////////////////////////////////////////////////////////////////////////////////////////////////////example code */
//Send an SMS text message

//Place a phone call, and respond with TwiML instructions from the given URL
//client.makeCall({
//
//    to:'+19173650744', // Any number Twilio can call
//    from: '+19175255330', // A number you bought from Twilio and can use for outbound communication
//    url: 'http://www.example.com/twiml.php' // A URL that produces an XML document (TwiML) which contains instructions for the call
//
//}, function(err, responseData) {
//
//    //executed when the call has been initiated.
//    console.log(responseData.from);
//
//});
//
////Loop through a list of SMS messages sent from a given number
//client.listSms({
//    from:'+19173650744'
//}, function (err, responseData) {
//    responseData.smsMessages.forEach(function(message) {
//        console.log('Message sent on: '+message.dateCreated.toLocaleDateString());
//        console.log(message.body);
//    });
//});

/* //////////////////////////////////////////////////////////////////////////////////////////////// end example code */

app.get('/', function(req, res){

    client.sendSms({

        to:'+19173650744', // Any number Twilio can deliver to
        from: '+19175255330', // A number you bought from Twilio and can use for outbound communication
        body: 'doctor get off the stipper pole it\'s time for work.' // body of the SMS message

    }, function(err, responseData) { //this function is executed when a response is received from Twilio

        if (!err) { // "err" is an error received during the request, if any

            // "responseData" is a JavaScript object containing data received from Twilio.
            // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
            // http://www.twilio.com/docs/api/rest/sending-sms#example-1

            console.log(responseData.from); // outputs "+14506667788"
            console.log(responseData.body); // outputs "word to your mother."
        }
    });

    res.send('d octor is being text now.... you are '+x+' in line.');
    x++;
});

app.listen(port);
console.log('Listening on port ' + port + '...');
