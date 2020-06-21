// MessageEmbed class extraction from the discord.js library/package
const {MessageEmbed} = require("discord.js");

// Basic command structure, importing bot, message and the args
exports.run = async (bot, message, args) => {
  
  // Send the commands list
  message.channel.send(
    new MessageEmbed()
      .setTitle("𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜 𝙻𝚒𝚜𝚝")
      .setDescription(`𝙰 𝚜𝚒𝚖𝚙𝚕𝚎 𝚖𝚞𝚜𝚒𝚌 𝚋𝚘𝚝.\n[𝙸𝚗𝚟𝚒𝚝𝚎 𝚄𝚁𝙻](${await bot.generateInvite(8)})`)
      .addField("𝚙𝚕𝚊𝚢", "Spielt einen Song ab oder Gliedert ihn gegebenenfalls in die Warteliste ein.\n*Befehl:  \`𝚙𝚕𝚊𝚢 (𝚈𝚘𝚞𝚝𝚞𝚋𝚎 𝚄𝚁𝙻/𝚅𝚒𝚍𝚎𝚘 𝚃𝚒𝚝𝚕𝚎)\`*")
      .addField("𝚜𝚔𝚒𝚙", "𝚂𝚔𝚒𝚙t den gerade spielenden Song. Ist ebenso dazu da, den nächsten Song abspielen zu lassen.\n*Befehl:  \`𝚜𝚔𝚒𝚙\`*")
      .addField("𝚚𝚞𝚎𝚞𝚎", "Zeigt alle Lieder an, die sich in der Warteliste befinden.\n*Befehl:  \`𝚚𝚞𝚎𝚞𝚎\`*")
      .addField("𝚕𝚎𝚊𝚟𝚎", "Löscht die Warteliste und Verlässt den Sprachkanal.\n*Befehl:  \`𝚕𝚎𝚊𝚟𝚎\`*")
      .setColor(0x2ECC71)
      .setTimestamp()
      
  )  
}
