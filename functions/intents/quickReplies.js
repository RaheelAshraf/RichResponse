const {Payload } = require('dialogflow-fulfillment');

module.exports = {

    quickRepFunc: function (agent) {

        const facebookPayload = `{
            "text": "Which bot do you want to see?",
            "quick_replies":[
              {
                "content_type":"text",
                "title":"How to get more out of your team or clients",
                "payload":"How to get more out of your team or clients",
                "image_url":"https://image.shutterstock.com/image-vector/gear-engine-icon-setting-symbol-260nw-1175785390.jpg"
              }, {
                "content_type":"text",
                "title":"Option 2",
                "payload":"Option 2",
                "image_url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-vug5ei4Yo2RA4mmaWUDXTsrWZo_xioWGlHg9LrTOvjPHOVC"
              },
              {
                "content_type":"location",
                "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHf6MP6bKxLGtMogAylywDn-hspUa5YEOOrFeBTluUU_8XARHS"
              }
            ]
          }`
      
          agent.add(new Payload(agent.FACEBOOK, facebookPayload, { sendAsMessage: true }));
    }
}