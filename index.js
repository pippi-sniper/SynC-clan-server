const http = require('http');
    http
	    .createServer(function(req, res) {
		    res.write('起動中');
    		res.end();
	    })
	    .listen(8080);

const discord = require('discord.js');
const client = new discord.Client();
const { ReactionController } = require('discord.js-reaction-controller');
require('date-utils');

const prefix = ">>";

client.on('ready', () => {
    console.log(new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000)) + "\n起動完了しました。")
})

client.on('guildMemberAdd', member => {
    member.roles.add('803565647799123998');
})

client.login(process.env.token);