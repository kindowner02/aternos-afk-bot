const mineflayer = require('mineflayer')
const antiafk = require('@nxg-org/mineflayer-anti-afk')

const bot = mineflayer.createBot({
  host: 'The_Demolisher.aternos.me', // Apna Aternos IP likh (jaise yourname.aternos.me)
  port: 25565,                 // port agar alag ho to change kar
  username: 'kindowner02@gmail.com', // Minecraft alt email ya username
  // password: 'yourpassword'   // Mojang accounts ke liye hi
})

bot.once('spawn', () => {
  console.log('✅ Bot joined! Anti-AFK enabled.')
  antiafk(bot)
})

bot.on('kicked', (reason) => console.log('Kicked:', reason))
bot.on('error', console.log)
