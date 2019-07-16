const {Payload } = require('dialogflow-fulfillment');

module.exports = {

    videoFunc: function (agent) {

        const facebookPayload = `{
            "attachment": {
              "type": "template",
              "payload": {
                 "template_type": "media",
                 "elements": [
                    {
                       "media_type": "video",
                       "url": "https://www.facebook.com/AllTimeConspiracies/videos/199444947485193/"
                    }
                 ]
              }
            }    
          }`;
          agent.add(new Payload(agent.FACEBOOK, facebookPayload, { sendAsMessage: true }));
    }
}