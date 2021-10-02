module.exports = {
  name: 'Help',
  description: 'Help Command',
  category: 'help',
  aliases: ['pomoc'],
  run: async (client, message, args, prefix, config) => {
    
    message.channel.send(`IP: ***mc.nightland.cz 1.8.9***
TS3: ***ts3.nightland.cz***
WEB: ***https://nightland.webnode.cz/ ***`);
    
  }
}