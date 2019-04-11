import * as functions from 'firebase-functions';
const { WebhookClient } = require('dialogflow-fulfillment');
const { Card, Suggestion } = require('dialogflow-fulfillment');
// const { LinkOutSuggestion } = require('actions-on-google');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {

    const _agent = new WebhookClient({ request: request, response: response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

    const welcome = (agent: any) => {

        agent.add(`welcome to boilerplate agent`)
    }

    const fallback = (agent: any) => {
        agent.add(`I didn't understand, please say that again`);
    }

    const testCard = (agent: any) => {

        agent.add(`This message is from Dialogflow's Cloud Functions for Firebase inline editor!`);
        agent.add(new Card({
            title: `Title: this is a card title`,
            imageUrl: 'https://dialogflow.com/images/api_home_laptop.svg',
            text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'This is a button',
            buttonUrl: 'https://docs.dialogflow.com/'
        })
        );
    }

    const testList = (agent: any) => {
        agent.add(`List is showing below`);
    }

    const testSuggestions = (agent: any) => {
        agent.add(`Suggestion are showing below`);
        agent.add(new Suggestion(`Quick Reply`));
        agent.add(new Suggestion(`Suggestion`));
    }





    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('card', testCard);
    intentMap.set('list', testList);
    intentMap.set('suggestions', testSuggestions)
    _agent.handleRequest(intentMap);
});

