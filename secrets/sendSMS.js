// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
if (process.env.NODE_ENV === "production") require("./secrets");

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTHENTICATION_TOKEN
);

(async () => {
  const message = await client.messages.create({
    body: "I HAVE THE POWER!!!!",
    from: "+16468467332",
    to: "+19175835877",
  });

  console.log(message);
})();
