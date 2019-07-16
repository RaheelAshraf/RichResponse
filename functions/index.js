
'use strict';
const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const Card = require('./intents/cardIntent');
const Button = require('./intents/buttonIntent');
const Suggestion = require('./intents/suggestionIntent');
const Video = require('./intents/videoIntent');
const Website = require('./intents/websiteIntent');
const QuickReplies = require('./intents/quickReplies');

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
    Card.cardFun(agent);
  }


  const Buttons = (agent) => {
    Button.butFunc(agent);
  }

  const suggestion = (agent) => {
    Suggestion.suggFunc(agent);
  }

  const video = (agent) => {
    Video.videoFunc(agent);
  }

  const website = (agent) => {
    Website.websiteFunc(agent);
  }

  const quickReplies = (agent) => {
    QuickReplies.quickRepFunc(agent);
  }

  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('card', card);
  intentMap.set('suggestion', suggestion);
  intentMap.set('video', video);
  intentMap.set('website', website);
  intentMap.set('button', Buttons);
  intentMap.set('quick replies', quickReplies);
  // intentMap.set('your intent name here', googleAssistantHandler);
  agent.handleRequest(intentMap);
});
