const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_40_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDc0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDksXG4gICAgICAgIDE0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MSxcbiAgICAgICAgODEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxMTksXG4gICAgICAgIDQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjcsXG4gICAgICAgIDQwLFxuICAgICAgICA0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI3LFxuICAgICAgICAyNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDczLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDg1LFxuICAgICAgICAyOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAxNyxcbiAgICAgICAgNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDYxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgODEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDcwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM0LFxuICAgICAgICA2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDYyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyOSxcbiAgICAgICAgODUsXG4gICAgICAgIDUyLFxuICAgICAgICA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJpb2htMDZSSis3bkpyWDduM1JSbVFEZGRURnZreEtJZHhvNEdvZDBKVTE0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ5WlR3bTNPTFRLdWZkVkNHYmE3YUVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYxZmUxYjk0LTk1ZWYtNDI3Zi04NzcwLWY4Yjg4M2EwMGU1Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTYsXG4gICAgICAzLFxuICAgICAgMjI5LFxuICAgICAgMTcwLFxuICAgICAgMjEwLFxuICAgICAgMTA5LFxuICAgICAgMjU0LFxuICAgICAgMjEwLFxuICAgICAgMTc0LFxuICAgICAgNyxcbiAgICAgIDIyMixcbiAgICAgIDU4LFxuICAgICAgMTYxLFxuICAgICAgOTEsXG4gICAgICAyNDgsXG4gICAgICAxMTAsXG4gICAgICA4NCxcbiAgICAgIDE3NyxcbiAgICAgIDIyMixcbiAgICAgIDExN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0LFxuICAgICAgNTEsXG4gICAgICAzNCxcbiAgICAgIDcsXG4gICAgICA1MyxcbiAgICAgIDU0LFxuICAgICAgMTUzLFxuICAgICAgMTQ0LFxuICAgICAgMTY3LFxuICAgICAgMTIyLFxuICAgICAgODgsXG4gICAgICAyMCxcbiAgICAgIDExMixcbiAgICAgIDExOCxcbiAgICAgIDgzLFxuICAgICAgMjI5LFxuICAgICAgNzksXG4gICAgICAxMzksXG4gICAgICAxNTEsXG4gICAgICAxODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUjdIWEFGRjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2MzcxNTY4Nzg5OToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlBhbmVheFwiLFxuICAgIFwibGlkXCI6IFwiNjQ5MDE0ODYxMDEwMzoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMM0M5SndCRVBmdG1yc0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInB1Ny94ZUNCM055TWxXbFRiUTVybUVNL01DRWFjaUZ6L1FYU0lFNldqMnc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ1E3ak9xNHZXRlhMU1FqbEtkcEJiWDkvU2VQMGR4THZqWVY3Q1hKY1lJOTlUSkdycnJjODc4N1NSbGxsUGUxV29aaUhZdmJRT0VwSVd1Y0pwNGlqQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRk5GdUpzaWR3WWRUQ2srbVFkbjFmWjdsazl6M3NzNWxtZitLM0Z3cGZob3FQeVcrbWk5VUNTQUpqNDczUXNlNytvUXBHUE9FczgweERuSDU1QURYaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE1Njg3ODk5OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0Nzg0NzkyXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
