//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "x2hussainbot120@gmail.com";
global.location = "BEANIBAZAR, SYLHET";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/dl/";
global.website = process.env.GURL || "https://whatsapp.com/dl/";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "8801334089349";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "8801334089349";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/5p61GEZ.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUZYK1BUcTZIdHYzSG41bnZ0cmQ5SjQvVlRrOFdlOFNVZHV1YjZmbUZrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVm1samE2b05oTkdPekV1blVpMTZjUGNXY0sxaFVQNGpxeFNtdDFMNDZBOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5QWlSR1ZCaDRFV2U0Z0k3K3lJREcvLzRvS21rMHh3OGhUc09lUGVUMjEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOdUlzWXptcXcyVGhUQy9qR1VSU2hxL3hrbTVmU1JhSm1pVjhrZExOYUd3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNCT2JEZWpFdWNDUS9BQUIwZ1k2b3NVcnVpMUxBNzFmdXJkR1FpeGxKMWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRzYTJsUWRUUlM5aVRRSHVOTE5oTnh0MlJmZXB4SFI3ZWhoY1RVaVh4M2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0MrTDdKZnA2Y0VmZWdmazJFOEhLcktoZkplR3FEYndTamdzbHZwb0xIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaVlvUjIzWDY5aG1qTHdNZWhtZmphZlAxYjZIbGMxVkpzQUZrUFZyb0lubz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iklxc2N1OVBDMkhUd01uU09Vc3Z2a0VNWWNPMHRMR3dMTWRXN2IreFFCZXJpay9neHlQYUlSUTBNNFNUdllxS2x3TGhDUFZtZXV0SGRtaHdkdytIY2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg4LCJhZHZTZWNyZXRLZXkiOiJzeVpzaFFNaFYraFV5ck0xVzBWaCtIQjJxb3FnZkVMUDR2alIxS1pjdXNrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijg4MDE5NjUxNDI4NTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzY4NjdENTZGNjNBOTBGMkE2RkFCRTQ0RUYxNkZGMkEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTIzMjM0MX0seyJrZXkiOnsicmVtb3RlSmlkIjoiODgwMTk2NTE0Mjg1NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1QTdCQzQ4Mzg4OUNDOTcwMzVDRjY1QkEzQ0I4MzNENyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxMjMyMzQxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHZFRmbS1MZFQtQ3ZoOHIzWkNZUThnIiwicGhvbmVJZCI6ImYwMDE5NGYyLTg3OTUtNGQ1OS04NjBjLWFiODI4MjYxY2IwYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDNTFUY1k4S1pkUExIdXlwWlVUanRVUUc0bEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUlFBVHNQRHpYUzE1aVRnam5CTDROZzRzSWxVPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjE0NEZITlNMIiwibWUiOnsiaWQiOiI4ODAxOTY1MTQyODU2OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Zg/CdmZDwnZmO8J2ZjvCdmLzwnZmE8J2ZiV9fX19fX18vXFxf8J+mi/CflqQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BPRTBVWVF4ZGZmdEFZWUNDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ind4eXo4RWE3UGc4dk42b0ZnSFNHOVBtcWs4dDNoK1BIVC9ROW0wNjMrVVU9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjM5RlVQbkROVmI5UmpXNC9WaGdDT3I1SS9lUGp1NjhrZXNCTnlsaEliaEE2cjM2NTluVWVtS00zVFRteUlsQ1B5ZTk2WTd1bWd5cXgyZ1dESGhFb0FRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMMEhwMDVpOHNwUDF3b1hsT1c5V0J3dHdxWW4vdUIxM3ExRmtUNWUwM2ZnQ0J5UWU5bjFneUtOazVCQWo1a29IbjRxMXQySVJmdE53VWczM2cxQ1VpUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijg4MDE5NjUxNDI4NTY6OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjTWNzL0JHdXo0UEx6ZXFCWUIwaHZUNXFwUExkNGZqeDAvMFBadE90L2xGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxMjMyMzM3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlhQyJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝗛𝗨𝗦𝗦𝗔𝗜𝗡-V2™`",
  author: process.env.PACK_AUTHER || "𝙃𝙐𝙎𝙎𝘼𝙄𝙉-V2",
  packname: process.env.PACK_NAME || "𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐀𝐇𝐀𝐌𝐄𝐃",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "𝐇𝐔𝐒𝐒𝐀𝐈𝐍 𝐀𝐇𝐀𝐌𝐄𝐃🌸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-X00anFgosmRhhWP75khXT3BlbkFJlyo7xhWoWhz9Sdoap9Hv",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
