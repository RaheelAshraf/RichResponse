// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';

const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Card, Suggestion, Payload } = require('dialogflow-fulfillment');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

  const welcome = (agent) => {
    agent.add(`hello from welcome intent`);
  }

  const fallback = (agent) => {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  const card = (agent) => {

    const facebookPayload = `{
  "attachment": {
    "type": "template",
    "payload": {
      "template_type":"generic",
      "elements":[
         {
          "title":"Here is your title!",
           "image_url":"",
          "subtitle":"Here goes your subtitle.",
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

  const suggestion = (agent) => {
    agent.add(`showing suggestion`)
    agent.add(new Suggestion(`Yes`));
    agent.add(new Suggestion(`No`));
  }

  const video = (agent) => {
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

  const website = (agent) => {

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

  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('card', card);
  intentMap.set('suggestion', suggestion);
  intentMap.set('video', video);
  intentMap.set('website', website);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
