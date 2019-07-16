const {Suggestion} = require('dialogflow-fulfillment');

module.exports = {

    suggFunc: function (agent) {
        agent.add(`showing suggestion`)
        agent.add(new Suggestion(`Yes`));
        agent.add(new Suggestion(`No`));
    }
}