const {Payload } = require('dialogflow-fulfillment');

module.exports = {

    butFunc: function (agent) {

        const facebookPayload = `{
            "attachment":{
              "type":"template",
              "payload":{
                "template_type":"button",
                "text":"What do you want to do next?",
                "buttons":[
                  {
                    "type":"web_url",
                    "url":"https://www.messenger.com",
                    "title":"Visit Messenger"
                  },
                  {
                    "type":"web_url",
                    "url":"https://www.google.com",
                    "title":"Visit Google"
                  },
                  {
                    "type":"web_url",
                    "url":"https://www.yahoo.com",
                    "title":"Visit Yahoo"
                  }
                ]
              }
            }
        }`
        agent.add(new Payload(agent.FACEBOOK, facebookPayload, { sendAsMessage: true }));
    }
}