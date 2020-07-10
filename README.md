# Simple Node.js Webhook Setup

## Prerequisites

1. [Node.js](https://nodejs.org)

1. A way to expose your localhost server so your Chatbot can be installed and tested on the Zoom Client. In this tutorial, I’ve used [Ngrok](https://ngrok.com).

## Local Setup

1. In your JWT App settings in the [Zoom App Marketplace](https://marketplace.zoom.us/), click on the "Features" page. Turn event subscriptions on and add a new event subscription. Name it Meeting Webhook and add `https://zoom.us` as the "Event notification endpoint URL". Click "Add events" and click "Meeting" > "End Meeting". Note the "Verification Token" generated above.

1. Create your `.env` file for your webhook verification token.

   `$ touch .env`

1. Paste the following in your `.env` file:

   verification_token=[verification token found in features page in your app marketplace settings]

   Example: `verification_token=7jVtpikLTYO_9WDV91AA`

1. Run `$ npm start` to start the webhook server.

1. We need to expose the local server to the internet to accept post requests, I use [Ngrok](https://ngrok.com) (free) for this.

   Once installed, open a new terminal tab and run:

   `$ ngrok http 4000`

   > NOTE: [I've put ngrok in my PATH so I can call it globally.](https://stackoverflow.com/a/36759493/6592510)

1. Copy the ngrok https url displayed in terminal, in your apps Event notification endpoint URL input, remove `https://zoom.us` and paste your ngrok https url. Remember to include `/webhook` path.

   Example: `https://e2d5fb925400.ngrok.io/webhook`

1. Click "Save".

1. Start and end a Zoom meeting. You will see the [Meeting Ended Webhook](https://marketplace.zoom.us/docs/api-reference/webhook-reference/meeting-events/meeting-ending) payload logged in terminal.
