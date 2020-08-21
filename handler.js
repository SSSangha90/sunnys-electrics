const AWS = require('aws-sdk')
const SES = new AWS.SES({
  region: 'eu-west-2'
})

function sendEmail(formData, callback){

  // build the SES parameters
  const emailParams = {
    Source: 'sukhi_sangha_11@hotmail.com',
    ReplyToAddresses: [formData.email],
    Destination: {
      ToAddresses: ['sukhi_sangha_11@hotmail.com'],
    },
    Message: {
      Body: {
        Text: {
          Charset: 'UTF-8',
          Data: `${formData.message}\n\nName: ${formData.name}\nEmail: ${formData.email}`,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'New message from sunnys-electrics.co.uk',
      },
    },
  };

  // Send the email
  SES.sendEmail(emailParams, callback)
  
}

module.exports.staticSiteMailer = (event, context, callback) => {
  const formData = JSON.parse(event.body)

  sendEmail(formData, function(err, data) {
    const response = {
      statusCode: err ? 500 : 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://sunnys-electrics.co.uk'
      },
      body: JSON.stringify({
        message: err ? err.message : data,
      }),
    };
    callback(null, response)
  });
}

