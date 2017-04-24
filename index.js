module.exports = {
  load (bot, commands, onEvent, serverId, pluginConfig, serverConfig) {
    commands.addAdminCommand('prefix', (msg, args) => {
      if (args.length === 0) {
        serverConfig.get('prefix').then(prefix => {
          msg.channel.createMessage(`Current prefix is \`${prefix}\``)
        })
      } else if (args.length === 1) {
        const newPrefix = args[0]

        if (newPrefix.length === 0) {
          msg.channel.createMessage(`Prefix can't be empty`)
          return
        }

        serverConfig.set('prefix', newPrefix).then(() => {
          msg.channel.createMessage(`Set prefix to \`${newPrefix}\``)
        })
      } else {
        msg.channel.createMessage('Invalid arguments')
      }
    })
  }
}
