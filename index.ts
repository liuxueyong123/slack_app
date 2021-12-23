import { App } from '@slack/bolt';
import config from './config';

// Initializes your app with your bot token and signing secret
const app = new App({
  signingSecret: config.signingSecret,
  token: config.botToken,
  socketMode: true,
  appToken: config.appToken,
  port: Number(process.env.PORT) || 3000
});

app.message('search', async ({ message, say }) => {
  await say({
    "attachments": [
      {
        "color": "#0976fd",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*Why is my new token expired?*\nI wants to know where you'd like to take the Paper Company investors to dinner tonight."
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Share with channel",
                  "emoji": true
                },
                "value": "button_click"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "👍",
                  "emoji": true
                },
                "value": "button_click",
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "👎",
                  "emoji": true
                },
                "value": "button_click",
              }
            ]
          }
        ]
      },
      {
        "color": "#0976fd",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*Why is my new token expired?*\nI wants to know where you'd like to take the Paper Company investors to dinner tonight."
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Share with channel",
                  "emoji": true
                },
                "value": "button_click"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "👍",
                  "emoji": true
                },
                "value": "button_click",
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "👎",
                  "emoji": true
                },
                "value": "button_click",
              }
            ]
          }
        ]
      },
      {
        "color": "#0976fd",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*Why is my new token expired?*\nI wants to know where you'd like to take the Paper Company investors to dinner tonight."
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Share with channel",
                  "emoji": true
                },
                "value": "button_click"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "👍",
                  "emoji": true
                },
                "value": "button_click",
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "👎",
                  "emoji": true
                },
                "value": "button_click",
              }
            ]
          }
        ]
      },
      {
        "color": "#d8d1c9",
        "blocks": [
          {
            "type": "section",
            "text": {
              "type": "mrkdwn",
              "text": "*Not helpful?Try one of the options below*"
            }
          },
          {
            "type": "actions",
            "elements": [
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Ask a Channel",
                  "emoji": true
                },
                "value": "button_click"
              },
              {
                "type": "button",
                "text": {
                  "type": "plain_text",
                  "text": "Manage FAQs",
                  "emoji": true
                },
                "value": "button_click",
              },
            ]
          }
        ]
      }
    ],
    text: `This is what I found so far`
  });
});

app.action('button_click', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
});

const start = async () => {
  await app.start();
  console.log('⚡️ Bolt app is running!');
}

start()
