module.exports = {
    name: 'eval',
    aliases: ['evaluate', 'math'],
    category: 'moderator',
    utilisation: '{prefix}eval [Evalutaion content]',

    execute(client, message, args) {
      const clean = text => {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
          return text;
        }


      const ownerId = '570491647364825088'

      if(message.author.id !== ownerId) return;

      try {
      const code = args.join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      let result = evaled
      for(let i = 0; i < result.length; i += 1900) {
      const toSend = result.substring(i, Math.min(result.length, i + 1900));
          message.channel.send(clean(toSend), {code:"xl"})
        }
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
    },
};