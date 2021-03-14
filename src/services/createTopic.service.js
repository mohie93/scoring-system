"use strict";
require("dotenv").config({});

const { PubSub } = require("@google-cloud/pubsub");

exports.createTopic = async () => {
  try {
    const projectId = process.env.GOOGLE_PROJECT_ID; // Your Google Cloud Platform project ID
    const topicName = process.env.TOPIC_NAME; // Name for the new topic to create
    const subscriptionName = process.env.SUBSCRIBTION_NAME; // Name for the new subscription to create
    // Instantiates a client
    const pubsub = new PubSub({ projectId });

    // Creates a new topic
    const [topic] = await pubsub.createTopic(topicName);
    console.log(`Topic ${topic.name} created.`);

    // Creates a subscription on that new topic
    const [subscription] = await topic.createSubscription(subscriptionName);

    // Receive callbacks for new messages on the subscription
    subscription.on("message", (message) => {
      console.log("Received message:", message.data.toString());
      process.exit(0);
    });

    // Receive callbacks for errors on the subscription
    subscription.on("error", (error) => {
      console.error("Received error:", error);
      process.exit(1);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// Execute the function
(async () => {
  await createTopic();
})();
