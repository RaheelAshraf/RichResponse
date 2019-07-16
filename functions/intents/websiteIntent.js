const {Payload } = require('dialogflow-fulfillment');

module.exports = {

    websiteFunc: function (agent) {

        
    const facebookPayload = `{
        "attachment": {
          "type": "template",
          "payload": {
            "template_type":"open_graph",
            "elements":[
               {
                "url":"https://gmail.com"
              }
            ]
          }
        }    
  }`;
  agent.add(new Payload(agent.FACEBOOK, facebookPayload, { sendAsMessage: true }));
    }
}