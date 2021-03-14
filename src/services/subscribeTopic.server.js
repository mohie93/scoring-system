const { PubSub } = require("@google-cloud/pubsub");
const updateScoreService = require("./updateScore.service");

async function listenForMessages(pubSubClient, subscriptionName, timeout) {
  // References an existing subscription
  const subscription = pubSubClient.subscription(subscriptionName);
  const messageHandler = async (message) => {
    // Create an event handler to handle messages
    console.log(`\t Received message ${message.id}:`);
    console.log(`\t Data: ${message.data}`);
    console.log(`\t Attributes: ${message.attributes}`);

    const evnetDetails = JSON.parse(message.data);
    await updateScoreService.call(evnetDetails);

    // "Ack" (acknowledge receipt of) the message
    message.ack();
  };

  // Listen for new messages until timeout is hit
  subscription.on("message", messageHandler);

  setTimeout(() => {
    subscription.removeListener("message", messageHandler);
    console.log(`${messageCount} message(s) received.`);
  }, timeout * 1000);
}

exports.call = async () => {
  try {
    const timeout = 60;
    const subscriptionName = process.env.SUBSCRIBTION_NAME; // Name for the new subscription to create
    const pubSubClient = new PubSub(); // Creates a client; cache this for further use
    await listenForMessages(pubSubClient, subscriptionName, timeout);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
