const {Payload } = require('dialogflow-fulfillment');

module.exports = {

    cardFun: function (agent) {

        const facebookPayload = `{
            "attachment": {
              "type": "template",
              "payload": {
                "template_type":"generic",
                "elements":[
                   {
                    "title":"This is new Title",
                     "image_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZb4ji9wBwf-Sh1auGeXf-nYUPOyO3C7UNwzb8I4xZE4T9p6zZ-w",
                    "subtitle":"This is new Subtitle.",
                    "default_action": {
                      "type": "web_url",
                      "url": "https://google.com",
                      "webview_height_ratio": "tall"
                    },
                    "buttons":[
                      {
                        "type":"web_url",
                        "url":"https://facebook.com",
                        "title":"Link to Facebook"
                      },{
                        "type":"postback",
                        "title":"Some Text",
                        "payload":"Some Text"
                      }              
                    ]      
                  }
                ]
              }
            }
          }`;
              agent.add(new Payload(agent.FACEBOOK, facebookPayload, { sendAsMessage: true }));

    }
}