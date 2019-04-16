import * as functions from 'firebase-functions';
const { WebhookClient } = require('dialogflow-fulfillment');
const { Card, Suggestion } = require('dialogflow-fulfillment');
// const { List, Image } = require('actions-on-google');

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

        agent.add(`This is card response`);
        agent.add(new Card({
            title: `Title: this is a card title`,
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/facebook-response.appspot.com/o/53871646_2284793568514544_6413371902282170368_o.jpg?alt=media&token=38669100-6246-4fcf-a442-9cc70996c744',
            text: `This is the body text of a card.  You can even use line\n  breaks and emoji! 💁`,
            buttonText: 'Button',
            buttonUrl: 'https://docs.dialogflow.com/'
        })
        );
    }

    const testList = (agent: any) => {

        agent.add(`showing list`);
    }

    const testSuggestions = (agent: any) => {
        agent.add(`Suggestion are showing below`);
        agent.add(new Suggestion(`Quick Reply`));
        agent.add(new Suggestion(`Suggestion`));
    }

    function playSong(agent: any) {


        const song = {
            speech: `<speak>Welcome to my action! <audio src="https://firebasestorage.googleapis.com/v0/b/facebook-response.appspot.com/o/AUD-20180123-WA0016.mp3?alt=media&amp;token=ff427084-a031-4ef5-8ebf-348f6ef3cf9d"> how can i help you?</audio></speak>`
        }

        agent.add(song.speech);
    }

    const intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('card', testCard);
    intentMap.set('list', testList);
    intentMap.set('suggestions', testSuggestions);
    intentMap.set('playsong', playSong)
    _agent.handleRequest(intentMap);
});

