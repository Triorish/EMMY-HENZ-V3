//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Calabar, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "https://t.me/EmmyHenz";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VBNXBLMC8zVXJUalBIdmljNGZ0T0UvT01hbXo0c0NRUm54Ulh4UHZGQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXBtSWRDZkM0NGc4UnJ2cGxQQjNLZjVBNUdVb3FjdDlXd201bWNKc1JrRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZS29RaUFWdWdXRHh2R1Y5Qnk5eTNydE5CN3NBckdmZ2lGTFM2aWRmcjNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRcFBaSjNKNDMvdm5mZmhRVGQ1Zmw2aXAvMEhxbzBZTkVBayswNDlTNW1nPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFQa2ZVNko2ZkZ5c2FUcDhIUElETG1mVkR2U0l2Y3RCZW1UQzRnemRxRzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQvNWR4WTZzOTNZN1pDdyt4OUNHWURYZTRXd09WREVSZHRjOWM3R3psQUk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkxvNzE0VFk5VGY2TXh3VmlaU1c3ZEdyTGZBUmRpdi8rcmsyWEIzSFkwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjl6RFpCN2Zrb0REcHp5NUd5SmRvam85ZUdyQzdGdlh3U0VlcmNRM3Jrcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRIKzdUbzZpSkc1Mk1ndXdwbjdZK2QxdEU5TTZKR1J6UEJCY2V1bWhIOWZPV0U1c09UVjFIODZId1ZDTVRxY1REaFVjUGJFdnFyMnhDVjNkRXZZakFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJncUo0bWVRZTYxZmhoa1NBc0h2T2xkTld1MG1FbXdTN2FKdGdtenBHY0owPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRV3JXOXlnZFM3bXh0RVY3YjJHX0VRIiwicGhvbmVJZCI6IjRiYzhiZjYzLTM3NTItNDFmNy04NjM4LWM2OWRkMzBkYjJlZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoSXRpVzd1OWQ4TGlQMDE4d1lrUStqK2QxWFU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNktZRGgwcFY4SVpkUG1veVpIQmlSK0h0RGFnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllKWjJFSDhGIiwibWUiOnsiaWQiOiIyNTU3NTQ5NTIyNzg6NDZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVHJpb3Jpc2gtNDk0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQUE80L2NDRU03M2lyZ0dHQTRnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJHREIwU3dwNndobWd0S3Vua1lFSFA0cjdzY01HZ0lVWFR1Q0lLeVBqYWpNPSIsImFjY291bnRTaWduYXR1cmUiOiIwWVF4NXpjSlcvS0N1YWNIQlBsTFkxdHV1bDdtdkhPTHZyeEhmTGtic3Y5Q29tbmNGRllSa09rb1JtYkZZT1hyY25YcG42dHdnZEFnNUcyYk9mQzZBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTDZRSFdlOC9Pc29sYmJwWSs1RE5hUFNObFRiVVFzdElNaXRQTnp4Si8yNmtzd2VvSWlPNUJUNWtIZTYva0tobEV2c2t1OW1kWDB4akRNZnhHRVpNQmc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3NTQ5NTIyNzg6NDZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUmd3ZEVzS2VzSVpvTFNycDVHQkJ6K0srN0hEQm9DRkYwN2dpQ3NqNDJveiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyODIzMjQxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDdGoifQ=="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "E M M Y",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "Emmanuel Henshaw",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
