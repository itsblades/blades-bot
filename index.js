const Discord = require("discord.js");
const TOKEN = "NDEzNDk0NzQzMDkyNDI4ODAx.DWak4A.aExtsMYh00CAZrEDFP4e0RwZTgA";
const PREFIX = "";

var bot = new Discord.Client();

bot.on("ready", function() {
  console.log("Ready");
});

bot.on("message", function(message) {
  if (message.author.equals(bot.user)) return;

  if (!message.content.startsWith(PREFIX)) return;

  var args = message.content.substring(PREFIX.length).split(" ");

  switch (args[0]) {
    case "ping":
      message.channel.sendMessage("Pong!")
      break;
    case "hello":
      message.channel.sendMessage("Hi there!")
  }
});

bot.login(process.env.TOKEN);
