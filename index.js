const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const rpcGenerator = require("discordrpcgenerator");
const prefix = config.prefix;
const token = config.token;
const clc = require("cli-color");
const consoleTitle = require("node-bash-title");
const bdd = require("./bdd.json");
const multistream = config.multistream;

consoleTitle("SelfR Project")

bot.on("ready", () => {
    console.clear();
    console.log(clc.red("_______  _______  ___      _______  ______   " + `\n` + "|       ||       ||   |    |       ||    _ |  " + `\n` + "|  _____||    ___||   |    |    ___||   | ||  " + `\n` + "| |_____ |   |___ |   |    |   |___ |   |_||_ " + `\n` + "|_____  ||    ___||   |___ |    ___||    __  |" + `\n` + "_____| ||   |___ |       ||   |    |   |  | |" + `\n` + "|_______||_______||_______||___|    |___|  |_|"))
    console.log(clc.green("‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖" + `\n` + "‖ Connected to :" + bot.user.tag + "                                              ‖" + `\n` + "‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖" + `\n` + "‖ Prefix :" + prefix + "                                                                 ‖" + `\n` + "‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖" + `\n` + "‖ couleur embed :" + config.color + "                                                    ‖" + `\n` + "‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖" + `\n` + "‖ image d'embed :" + config.image + " ‖" + `\n` + "‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖" + `\n` + "‖ rpc title :" + config.rpctitle + "                                                     ‖" + `\n`+ "‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖" + `\n` + "‖ twitch :" + config.twitch + "                                          ‖" + `\n` + "‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖" + `\n` + "‖ ton id :" + bot.user.id + "                                                ‖" + `\n` + "‖≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡‖"))
});

bot.on('ready', function() {
    rpcGenerator.getRpcImage('790957605648203827', 'zenitsu').then(_0x18f2x2e => {
        rpcGenerator.getRpcImage('790957605648203827', 'selfr').then(_0x18f2x2f => {
            let _0x18f2x30 = new rpcGenerator.Rpc()
                .setName('SelfR Project')
                .setUrl('https://discord.gg/paradoxfr')
                .setType('PLAYING')
                .setApplicationId('790957605648203827')
                .setDetails('SelfR-selfbot')
                .setAssetsLargeImage(_0x18f2x2f.id)
                .setAssetsSmallImage(_0x18f2x2e.id)
                .setAssetsLargeText('SelfR-Selfbot')
                .setAssetsSmallText('By ReZzox.')
                .setState('By ReZzox.')
                .setStartTimestamp(Date.now())
                .setParty({
                    id: ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(/[018]/g, _0x18f2x14 => {
                        return (_0x18f2x14 ^ Math['random']() * 16 >> _0x18f2x14 / 4)
                            .toString(16);
                    })
                });
            bot.user.setPresence(_0x18f2x30.toDiscord())
                .catch(console.error);
        });
    });
});

bot.on("message", message => {
    let _0x18f2x3c = message;
    if (_0x18f2x3c.author.id !== bot.user.id) {
        return;
    }

    if(message.content.startsWith(prefix + "help")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("「HELP」")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        .addField(prefix + "status", "`Affiche les commandes status`")
        .addField(prefix + "2status", "`Affiches les commandes status`")
        .addField(prefix + "fun", "`Affiche les commandes fun`")
        .addField(prefix + "2fun", "`Affiche les commandes fun`")
        .addField(prefix + "3fun", "`Affiche les commandes fun`")
        // .addField(prefix + "anime", "`Affiche les commandes anime`")
        .addField(prefix + "tools", "`Affiche les commandes tools`")
        .addField(prefix + "hack", "`Affiche les commandes de hack | FUTUR MAJ`")
        .addField(prefix + "raid", "`Affiche les commandes de raid`")
        .addField(prefix + "mod", "`Affiche les commandes de modérations`")
        .addField(prefix + "texte", "`Affiche les commandes texte`")
        .addField(prefix + "divers", "`Affiche les commandes divers`")
        .addField(prefix + "selfr", "`Affiche les commandes selfr`")
        message.channel.send(embed);
    }

    if(message.content.startsWith(prefix + "status")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        .setTitle("「STATUS」")
        .addField(prefix + "rpc", "`Change votre activité par votre rpc custom`")
        .addField(prefix + "stream", "`Change votre activité en stream`")
        .addField(prefix + "multistream", "`Change votre activité en multistream`")
        .addField(prefix + "play", "`Change votre activité en joue à`")
        .addField(prefix + "watch", "`Change votre activité en regarde`")
        .addField(prefix + "list", "`Change votre activité écoute`")
        .addField(prefix + "online", "`Change votre status en en ligne`")
        .addField(prefix + "idle", "`Change votre status en inactif`")
        .addField(prefix + "dnd", "`Change votre status en ne pas déranger`")
        .addField(prefix + "invisible", "`Change votre status en invisible`")
        .addField(prefix + "spotify", "`Change votre activité en spotify`")
        .addField(prefix + "youtube", "`Change votre activité en youtube`")
        .addField(prefix + "deezer", "`Change votre activité en deezer`")
        .addField(prefix + "twitter", "`Change votre activité en twitter`")
        .addField(prefix + "github", "`Change votre activité en github`")
        .addField(prefix + "pornhub", "`Change votre activité en pornhub`")
        .addField(prefix + "restore", "``Restore votre activité`")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "pornhub")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde pornhub")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "pornhub").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "pornhub").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("PornHub")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/paradoxfr')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("PornHub")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "github")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en joue à github")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "github").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "github").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("GitHub")
                    .setType('PLAYING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/paradoxfr')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("GitHub")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "deezer")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en écoute deezer")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "deezer").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "deezer").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Deezer")
                    .setType("LISTENING")
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/paradoxfr')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("Deezer")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "twitter")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en joue à twitter")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "twitter").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "twitter").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Twitter")
                    .setType('PLAYING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/paradoxfr')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("Twitter")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "youtube")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde youtube")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "youtube").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "youtube").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("YouTube")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("YouTube")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "spotify")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en écoute spotify")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "spotify").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "spotify").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Spotify")
                    .setType("LISTENING")
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("Spotify")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "multistream")){
        message.delete();
        let statuts = multistream
        setInterval(function() {
            let stats = statuts[Math.floor(Math.random()*statuts.length)];
            bot.user.setActivity(stats, {type: 'STREAMING'}, {url: config.twitch})
        }, 2500)
        var embed = new Discord.RichEmbed()
        .setTitle("Votre status à été changé en multistream")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "stream")){
        message.delete();
        bot.user.setActivity(config.stream, {type: "STREAMING"}, {url: config.twitch})
        message.channel.send("***Votre activité à été changé en stream***" + " **" + config.stream + "**")
    }

    if(message.content.startsWith(prefix + "play")){
        message.delete();
        bot.user.setActivity(config.play, {type: 'PLAYING'})
        message.channel.send("***Votre activité à été changé en joue à***" + " **" + config.play + "**")
    }

    if(message.content.startsWith(prefix + "watch")){
        message.delete();
        bot.user.setActivity(config.watch, {type: 'WATCHING'})
        message.channel.send("***Votre acitvité à été changé en regarde ***" + "**" + config.watch + "**")
    }

    if(message.content.startsWith(prefix + "list")){
        message.delete();
        bot.user.setActivity(config.listen, {type: "LISTENING"})
        message.channel.send("***Votre activité à été changé en écoute***" + " **" + config.listen + "**")
    }

    if(message.content.startsWith(prefix + "online")){
        message.delete();
        bot.user.setStatus("online")
        message.channel.send("***Votre status à été changé en en ligne***")
    }

    if(message.content.startsWith(prefix + "idle")){
        message.delete();
        bot.user.setStatus('idle')
        message.channel.send("***Votre status à été changé en inactif***")
    }

    if(message.content.startsWith(prefix + "dnd")){
        message.delete();
        bot.user.setStatus("dnd")
        message.channel.send("***Votre status à été changé en ne pas déranger***")
    }

    if(message.content.startsWith(prefix + "invisible")){
        message.delete();
        bot.user.setStatus("invisible")
        message.channel.send("***Votre status à été changé en invisible***")
    }

    if(message.content.startsWith(prefix + "2status")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setTitle("「STATUS」")
        .addField(prefix + "dbz", "`Change votre activité en dbz`")
        .addField(prefix + "naruto", "`Change votre activité en naruto`")
        .addField(prefix + "dbs", "`Change votre activité en dbs`")
        .addField(prefix + "onepiece", "`Change votre activité en onepiece`")
        .addField(prefix + "blackclover", "`Change votre activité en black clover`")
        .addField(prefix + "fireforce", "`Change votre activité en fire force`")
        .addField(prefix + "hunterhunter", "`Change votre activité en hunter x hunter`")
        .addField(prefix + "goh", "`Change votre activité en god of highschool`")
        .addField(prefix + "snk", "`Change votre activité en attaque des titans`")
        .addField(prefix + "sao", "`Change votre activité en sword art online`")
        .addField(prefix + "baki", "`Change votre activité en baki`")
        .addField(prefix + "hajime", "`Change votre activité en hajime no ippo`")
        .addField(prefix + "demonslayer", "`Change votre activité en demon slayer`")
        .addField(prefix + "deathnote", "`Change votre activité en death note`")
        .addField(prefix + "southpark", "`Change votre activité en southpark`")
        .addField(prefix + "retro", "`Change votre activité en retro`")
        .addField(prefix + "default", "`Clear votre activité`")
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "onepiece")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde one piece")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "onepiece").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "onepiece").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("One Piece")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("One Piece")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "retro")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en joue a retro")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "retro").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "retro").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Retro")
                    .setType('PLAYING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("By ReZzox.")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "deathnote")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde death note")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "deathnote").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "deathnote").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Death Note")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("Death Note")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "southpark")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde south park")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "southpark").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "southpark").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("South Park")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("South Park")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "demonslayer")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde demon slayer")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "demonslayer").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "demonslayer").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Demon Slayer")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("Demon Slayer")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "hajime")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde hajime no ippo")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "hajime").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "hajime").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Hajime No Ippo")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("Hajime No Ippo")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "baki")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde baki")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "baki").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "baki").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Baki")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("Baki")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "sao")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde sword art online")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "sao").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "sao").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Sword Art Online")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("SAO")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "snk")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde attaque des titans")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "snk").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "snk").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Attaque Des Titans")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("AOT")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "goh")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde god of highschool")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "goh").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "goh").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("God Of HighSchool")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("GOH")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "hunterhunter")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde hunter x hunter")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "hunterhunter").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "hunterhunter").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Hunter X Hunter")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("HXH")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "fireforce")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde fire force")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "fireforce").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "fireforce").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Fire Force")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("Fire Force")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "blackclover")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde black clover")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "blackclover").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "blackclover").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Black Clover")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("Black Clover")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "dbs")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde dragon ball super")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "dbs").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "dbs").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Dragon Ball Super")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("DBS")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "naruto")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde naruto")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "naruto").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "naruto").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Naruto")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("Naruto")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "dbz")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été changé en regarde dragon ball z")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage("797421715423494164", "dbz").then(_0x18f2x2e => {
            rpcGenerator.getRpcImage("797421715423494164", "dbz").then(_0x18f2x2f => {
                let rpc = new rpcGenerator.Rpc()
                    .setName("Dragon Ball Z")
                    .setType('WATCHING')
                    .setUrl("https://discord.gg/paradoxfr")
                    .setApplicationId('797421715423494164')
                    .setDetails('SelfR Project')
                    .setState('.gg/blitz')
                    .setStartTimestamp(Date.now())
                    .setAssetsLargeImage(_0x18f2x2e.id)
                    .setAssetsSmallImage(_0x18f2x2f.id)
                    .setAssetsLargeText("DBZ")
                    .setAssetsSmallText("By ReZzox.")
                    bot.user.setPresence(rpc.toDiscord())
                        .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "default")){
        message.delete();
        bot.user.setActivity('', {type: ''})
        var embed = new Discord.RichEmbed()
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        .setTitle('Votre activité à été clear')
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "restore")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Votre activité à été restorer")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
        rpcGenerator.getRpcImage('790957605648203827', 'zenitsu').then(_0x18f2x2e => {
            rpcGenerator.getRpcImage('790957605648203827', 'selfr').then(_0x18f2x2f => {
                let _0x18f2x30 = new rpcGenerator.Rpc()
                    .setName('SelfR Project')
                    .setUrl('https://www.twitch.tv/kaydop')
                    .setType('PLAYING')
                    .setApplicationId('790957605648203827')
                    .setDetails('SelfR-selfbot')
                    .setAssetsLargeImage(_0x18f2x2f.id)
                    .setAssetsSmallImage(_0x18f2x2e.id)
                    .setAssetsLargeText('SelfR-Selfbot')
                    .setAssetsSmallText('By ReZzox.')
                    .setState('v1.7.2 | Bêta')
                    .setStartTimestamp(Date.now())
                    .setParty({
                        id: ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(/[018]/g, _0x18f2x14 => {
                            return (_0x18f2x14 ^ Math['random']() * 16 >> _0x18f2x14 / 4)
                                .toString(16);
                        })
                    });
                bot.user.setPresence(_0x18f2x30.toDiscord())
                    .catch(console.error);
            });
        });

    }
    //status
    if(message.content.startsWith(prefix + "rpc")){
        message.delete();
        rpcGenerator.getRpcImage(config.rpcid, config.rpcimagel).then(_0x18f2x2e => {
            rpcGenerator.getRpcImage(config.rpcid, config.rpcimages).then(_0x18f2x2f => {
                let _0x18f2x30 = new rpcGenerator.Rpc()
                    .setName(config.rpctitle)
                    .setUrl(config.twitch)
                    .setType(config.rpcstatus)
                    .setApplicationId(config.rpcid)
                    .setDetails(config.rpcdetail)
                    .setAssetsLargeImage(_0x18f2x2f.id)
                    .setAssetsSmallImage(_0x18f2x2e.id)
                    .setAssetsLargeText(config.rpctext)
                    .setAssetsSmallText('w/SelfR Project')
                    .setState(config.rpcstate)
                    .setStartTimestamp(Date.now())
                    .setParty({
                        id: ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(/[018]/g, _0x18f2x14 => {
                            return (_0x18f2x14 ^ Math['random']() * 16 >> _0x18f2x14 / 4)
                                .toString(16);
                        })
                    });
                bot.user.setPresence(_0x18f2x30.toDiscord())
                    .catch(console.error);
            });
        });
    }

    if(message.content.startsWith(prefix + "fun")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("「FUN」")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        .addField(prefix + "kiss", "`Envoye gif kiss`")
        .addField(prefix + "love", "`Envoye gif love`")
        .addField(prefix + "issou", "`Envoye gif issou`")
        .addField(prefix + "blc", "`Envoye gif blc`")
        .addField(prefix + "patate", "`Envoye gif patate`")
        .addField(prefix + "sad", "`Envoye gif sad`")
        .addField(prefix + "boom", "`Envoye gif boom`")
        .addField(prefix + "neko", "`Envoye gif neko`")
        .addField(prefix + "tg", "`Envoye gif tg`")
        .addField(prefix + "death", "`Envoye gif death`")
        .addField(prefix + "daronned", "`Envoye gif daronned`")
        .addField(prefix + "face", "`Envoye gif facepalm`")
        .addField(prefix + "load", "`Envoye gif load`")
        .addField(prefix + "troll", "`Envoye gif troll`")
        .addField(prefix + "giffle", "`Envoye gif biffle`")
        .addField(prefix + "claquette", "`Envoye gif claquette`")
        .addField(prefix + "cadeau", "`Envoye gif cadeau`")
        .addField(prefix + "hotdog", "`Envoye gif hotdog`")
        .addField(prefix + "haxx", "`Envoye gif h4x0r`")
        .addField(prefix + "bontoutou", "`Envoye gif bon toutou`")
        .addField(prefix + "calcul", "`Envoye gif calcul`")
        .addField(prefix + "hug", "`Envoye gif hug`")
        .addField(prefix + "suicide", "`Envoye gif suicide`")
        .addField(prefix + "veski", "`Envoye gif veski`")
        .addField(prefix + "juif", "`Envoye gif juif`")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "juif")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("J'adore les juifs")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/l2SpVdpzmfVzzZBrW/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "veski")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Jte veski gros")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/HmTLatwLWpTQk/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "suicide")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Jvais me suicider")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/l2JeiuwmhZlkrVOkU/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "hug")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Hug")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/yidUzriaAGJbsxt58k/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "calcul")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Je compte là !")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/APqEbxBsVlkWSuFpth/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "bontoutou")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Bon toutou")
        .setColor(config.color)
        .setImage("https://cdn.discordapp.com/attachments/766334964245463051/800070392927879218/btt.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "haxx")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("I'm a H4X0R")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/115BJle6N2Av0A/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "hotdog")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("hotdog")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/SYGkVEBAhm0g0/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "cadeau")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Tien un cadeau pour toi !")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/kKo2x2QSWMNfW/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "claquette")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Claquette")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/l2R0cQXxdRVokDHDq/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "giffle")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Prend toi sa")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/lNRASHC9A4BZ4BTLDU/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "troll")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("You are trolled")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/dVtGcobFMRXO0/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "load")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Loading")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/cnzP4cmBsiOrccg20V/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "face")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("face")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/3bcAcvV2DtlDO/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "daronned")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("daronned")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/ev1KF0JQPCNXO/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "death")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("t mort jvais te faire")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/aOPINgmqpVXNK/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "tg")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Ta gueule")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/12UBOmpaATdE7C/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "neko")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("neko")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/JDeE5kYMFtAs0/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "boom")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Eh boom")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/XKCdA6ERnXp6M/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "sad")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("triste")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/BEob5qwFkSJ7G/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "patate")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("patate")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/3ohhwA2E1DSVMsZW00/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "blc")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("je m'en blc frr")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/l3q2NgG969xJC1FRe/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "issou")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Issou")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/11mwI67GLeMvgA/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "love")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Je t'aime")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/26FLdmIp6wJr91JAI/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "kiss")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Bisou")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/lTQF0ODLLjhza/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "2fun")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle('「FUN」')
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        .addField(prefix + "sayan", "`Envoye gif sayan`")
        .addField(prefix + "omg", "`Envoye gif OMG`")
        .addField(prefix + "roux", "`Envoye gif roux`")
        .addField(prefix + "gay", "`Envoye gif gay`")
        .addField(prefix + "debitage", "`Envoye gif debitage`")
        .addField(prefix + "fdp", "`Envoye gif fdp`")
        .addField(prefix + "meme", "`Envoye gif meme`")
        .addField(prefix + "btc", "`Envoye gif btc`")
        .addField(prefix + "eth", "`Envoye gif eth`")
        .addField(prefix + "today", "`Envoye gif today`")
        .addField(prefix + "graff", "`Envoye gif graff`")
        .addField(prefix + "neon", "`Envoye gif neon`")
        .addField(prefix + "beach", "`Envoye gif beach`")
        .addField(prefix + "effectneon", "`Envoye gif neon effect`")
        .addField(prefix + "noel", "`Envoye gif noel`")
        .addField(prefix + "blood", "`Envoye gif blood`")
        .addField(prefix + "light", "`Envoye gif light`")
        .addField(prefix + "retro", "`Envoye gif retro`")
        .addField(prefix + "pf", "`Envoye gif pf`")
        .addField(prefix + "opinion", "`Envoye gif opinion`")
        .addField(prefix + "cat", "`Envoye gif cat`")
        .addField(prefix + "dogs", "`Envoye gif dogs`")
        .addField(prefix + "bird", "`Envoye gif bird`")
        .addField(prefix + "arouf", "`Envoye gif arouf`")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "arouf")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Arouf Gangsta")
        .setColor(config.color)
        .setImage("https://cdn.discordapp.com/attachments/766334964245463051/800076194791161916/tenor.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "bird")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Bird")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/l0MYRTamKvnt0Vr32/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "dogs")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Chien")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/eYilisUwipOEM/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "cat")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Chat")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "opinion")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Opinion")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/5XNEIKcohVG8w/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "pf")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Pff")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/Qakc4UBUd4jjnaDeBv/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "retro")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Retro")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/WS3bI8VeevDOUGCIQx/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "light")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Jour / nuit")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/3ohzdFHDBEG32PmWJO/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "blood")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Blood")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/IwYXRW8IXRftS/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "noel")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Noel")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/fseXCQOSahl1gtcAnL/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "effectneon")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Neon effect")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/QZyOqV4p9DbGTh6jEm/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "beach")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Beach")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/3oEjHZMFYibQnjvTq0/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "neon")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Neon")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/8WBRMNhQdB9sI/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "graff")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Graff")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/5xtDarq8DOORPIqO10I/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "today")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Aujourd'hui")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/Z8kZsSckjuhRolwVr1/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "eth")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("ETH")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/Qz5ITuBg5uvLy0yiRY/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "btc")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("BTC")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/U7y1PUFXsAUyZKcOOF/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "meme")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Meme")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/8m4R4pvViWtRzbloJ1/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "fdp")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Sale fdp")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/OTzkAlT5mjL7G/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "debitage")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("pk tu debite ?")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/A0lBH04aSvP30VUwdM/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "gay")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("T'es gay")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/3o72FiXBdWRy3aZHJm/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "roux")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Tu es roux")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/UQ1nlrPzxolAmseHnD/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "omg")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Oh mon dieux")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/TgOYjtgKpS9jAytUlh/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "sayan")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("SUPER SAIYEN")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/ul1omlrGG6kpO/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "3fun")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("「FUN」")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        .addField(prefix + "2arouf", "`Envoye gif arouf`")
        .addField(prefix + "3arouf", "`Envoye gif arouf`")
        .addField(prefix + "chomeur", "`Envoye gif chomeur`")
        .addField(prefix + "bob", "`Envoye gif bob l'éponge`")
        .addField(prefix + "choquer", "`Envoye gif choquer`")
        .addField(prefix + "racisme", "`Envoye gif racisme`")
        .addField(prefix + "corona", "`Envoye gif corona`")
        // .addField(prefix + "gtweet", "`Envoye un tweet`")
        .addField(prefix + "comment", "`Envoye gif comment`")
        .addField(prefix + "baguette", "`Envoye gif baguette`")
        .addField(prefix + "trump", "`Envoye gif trump`")
        .addField(prefix + "iphone", "`Envoye gif iphone`")
        .addField(prefix + "wanted", "`Envoye gid wanted`")
        .addField(prefix + "triggered", "`Envoye gif triggered`")
        .addField(prefix + "rpanda", "`Envoye gif pandaroux`")
        .addField(prefix + "panda", "`Envoye gif panda`")
        .addField(prefix + "fox", "`Envoye gif fox`")
        .addField(prefix + "pikachu", "`Envoye gif pikachu`")
        .addField(prefix + "koala", "`Envoye gif koala`")
        .addField(prefix + "pokedex", "`Envoye gif pokedex`")
        .addField(prefix + "pecho", "`Envoye gif pecho`")
        .addField(prefix + "chatbot", "`Envoye gif chatbot`")
        .addField(prefix + "fish", "`Envoye gif fish`")
        .addField(prefix + "scroll", "`Envoye gif scroll`")
        .addField(prefix + "saturation", "`Envoye gif saturation`")
        .message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "saturation")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Saturation")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/sqrnGQaxT7C3m/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "scroll")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Scroll")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/3oxHQCoIwppvOPRKYU/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "fish")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Poisson")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/kTZBUjdRlZB3G/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "chatbot")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Chatbot")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/400He9KsCbdgYt2N7N/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "pokedex")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("j'ai attraper un pokemon")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/3o6ZtrwsRu8hbmovsY/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "koala")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Koala")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/aWpSIlUoSvcNa/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "pikachu")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Pika Pika")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/U2nN0ridM4lXy/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "fox")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Fox")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/bGl8yMNLsU7ao/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "panda")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Panda")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/EatwJZRUIv41G/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "rpanda")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Panda roux")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/BgLzhfGgdoEKI/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "triggered")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Triggered")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/1G0DbfuEZBUmA/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "wanted")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Wanted")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/3gLcBWrmZxF7E5ZGZx/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "iphone")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("j'ai acheté un iphone")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/26n79t82lmj989iAE/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "trump")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("D.Trump")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/lT4N7JiPGATIhVwR91/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "baguette")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Baguette")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/MCoHTwV6tsC3pKu84g/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "comment")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Comment")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/fngcM35fl2ySrblJLV/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "corona")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Coronavirus")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/gkXSfmA8ynT59X9rr4/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "racisme")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("c'est raciste")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/YWwYgeKquXKJq/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "choquer")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Wlh jsuis choqué")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/kddBpvyt2LjzDRRIAo/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "bob")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("bob")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/LMt98UHqHx9zBE6TBh/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "chomeur")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("FC Chomage")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/l1J3BtZ57jdR6ymOs/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "2arouf")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Arouf Gangsta")
        .setColor(config.color)
        .setImage("https://cdn.discordapp.com/attachments/766334964245463051/800084736273416192/tenor_2.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "3arouf")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("Arouf Gangsta")
        .setColor(config.color)
        .setImage("https://cdn.discordapp.com/attachments/766334964245463051/800084810953130024/tenor_1.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "tools")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("「TOOLS」")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        .addField(prefix + "getid", "`Envoye votre id`")
        .addField(prefix + "getaid", "`Envoye l'id d'un utilisateur`")
        // .addField(prefix + "ping", "`Affiche votre ping`"))
        .addField(prefix + "pp", "`Envoye votre pp`")
        .addField(prefix + "avatar", "`Envoye la pp d'un utilisateur`")
        .addField(prefix + "mytoken", "`Envoye votre token discord`")
        .addField(prefix + "embed", "`Envoye votre embed personaliser`")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "avatar")){
        message.delete();
        if(message.mentions.users.first()) {
            user = message.mentions.users.first();
        }
        else{
            user = message.author;
        }
        message.channel.send(`**PP de ${user.username}#${user.discriminator} :**`)
        message.channel.send(`${user.avatarURL}`)
    }

    if(message.content.startsWith(prefix + "getaid")){
        message.delete();
        if(message.mentions.users.first()) {
            user = message.mentions.users.first();
        }
        else{
            user = message.author;
        }
        message.channel.send(`**ID de : ${user.username}#${user.discriminator} = ${user.id}**`)
    }

    if(message.content.startsWith(prefix + "embed")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle(config.embedtitle)
        .setColor(config.embedcolor)
        .setURL(config.embedurl)
        .setFooter(config.embedfooter)
        .setImage(config.embedimage)
        .addField(config.embedfield)
        .addField(config.embedfield2)
        .addField(config.embedfield3)
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "mytoken")){
        message.delete();
        message.channel.send("**Votre Token: **" + "*" + config.token + "*")
    }

    if(message.content.startsWith(prefix + "pp")){
        message.delete();
        message.channel.send("***Votre pp: ***")
        message.channel.send(bot.user.avatarURL)
    }

    if(message.content.startsWith(prefix + "getid")){
        message.delete();
        message.channel.send("**Votre id: **" + "*" + bot.user.id + "*")
    }


    if(message.content.startsWith(prefix + "texte")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("「TEXTE」")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        .addField(prefix + "cyan", "`Envoye un message en cyan`")
        .addField(prefix + "red", "`Envoye un message en rouge`")
        .addField(prefix + "green", "`Envoye un message en vert`")
        .addField(prefix + "orange", "`Envoye un message en orange`")
        .addField(prefix + "souli", "`Envoye un message souligner`")
        .addField(prefix + "gras", "`Envoye un message en gras`")
        .addField(prefix + "barre", "`Envoye un message barrer`")
        .addField(prefix + "italique", "`Envoye un message en italique`")
        .addField(prefix + "invi", "`Envoye un message en invisible`")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "invi")){
        message.delete();
        let msg = message.content.slice(5)
        if(!msg) return message.reply("**Veuillez marquer un texte**")
        message.channel.send("||" + msg + "||")
    }

    if(message.content.startsWith(prefix + "cyan")){
        message.delete();
        let msg = message.content.slice(5)
        if(!msg) return message.reply("**Veuillez marquer un texte**")
        message.channel.send("```json" + `\n` + `"` + msg + "```")
    }

    if(message.content.startsWith(prefix + "orange")){
        message.delete();
        let msg = message.content.slice(7)
        if(!msg) return message.reply("**Veuillez marquer un texte**")
        message.channel.send("```fix" + `\n` + msg + "```")
    }

    if(message.content.startsWith(prefix + "red")){
        message.delete();
        let msg = message.content.slice(4)
        if(!msg) return message.reply("**Veuillez marquer un texte**")
        message.channel.send("```diff" + `\n`+ "-" + msg + "```")
    }

    if(message.content.startsWith(prefix + "green")){
        message.delete();
        let msg = message.content.slice(6)
        if(!msg) return message.reply("**Veuillez marquer un texte**")
        message.channel.send("```css" + `\n` + msg + "```" )
    }


    if(message.content.startsWith(prefix + "italique")){
        message.delete();
        let msg = message.content.slice(9)
        if(!msg) return message.reply("**Veuillez marquer un texte**")
        message.channel.send("_" + msg + "_")
    }

    if(message.content.startsWith(prefix + "barre")){
        message.delete();
        let msg = message.content.slice(6)
        if(!msg) return message.reply("**Veuillez marquer un texte**")
        message.channel.send("~~" + msg + "~~")
    }

    if(message.content.startsWith(prefix + "gras")){
        message.delete();
        let msg = message.content.slice(5)
        if(!msg) return message.reply("**Veuillez marquer un texte**")
        message.channel.send("**" + msg + "**")
    }

    if(message.content.startsWith(prefix + "souli")){
        message.delete();
        let msg = message.content.slice(6)
        if(!msg) return message.reply("**Veuillez marquer un texte**")
        message.channel.send("__" + msg + "__")
    }

    if(message.content.startsWith(prefix + "raid")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("「RAID」")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        .addField(prefix + "ban", "`Ban un utilisateur`")
        .addField(prefix + "kick", "`Kick un utilisateur`")
        .addField(prefix + "serverinfo | FUTUR MAJ")
        .addField(prefix + "spam", "`Spam dans le chat | FUTUR MAJ`")
        .addField(prefix + "stopspam", "`Stop le spam | FUTUR MAJ`")
        .addField(prefix + "spamchat", "`Crée full chat | FUTUR MAJ`")
        .addField(prefix + "stopchatspam", "`Stop le spamchat | FUTUR MAJ`")
        message.channel.send(embed)
    }

    if (message.content.startsWith(prefix + 'kick')) {
        message.delete();
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .kick('Optional reason that will display in the audit logs')
              .then(() => {
                message.reply(`**${user.tag} à été kick**`);
              })
              .catch(err => {
                message.reply('**Vous ne pouvez pas kick ce membre**');
                console.error(err);
              });
          } else {
            message.reply("**L'utilisateur n'est pas dans le serveur**");
          }
        } else {
          message.reply("**L'utilisateur n'as pas été mentionné**");
        }
      }

      if (message.content.startsWith(prefix + 'ban')) {
          message.delete();
        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member
              .ban('Optional reason that will display in the audit logs')
              .then(() => {
                message.reply(`**${user.tag} à été ban**`);
              })
              .catch(err => {
                message.reply('**Vous ne pouvez pas ban ce membre**');
                console.error(err);
              });
          } else {
            message.reply("**L'utilisateur n'est pas dans le serveur**");
          }
        } else {
          message.reply("**L'utilisateur n'as pas été mentionné**");
        }
      }

      if(message.content.startsWith(prefix + "mod")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("「MODERATIONS」")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        .addField(prefix + "ban", "`Ban un membre`")
        .addField(prefix + "kick", "`Kick un membre`")
        .addField(prefix + "clear", "``Clear un nombre de message défini`")
        .addField(prefix + "warn", "`Warn un membre`")
        message.channel.send(embed)
      }

      if(message.content == prefix + "clear"){
        if(message.members.hasPermissions('MANAGE_MESSAGE')){
              let args = message.content.split(" ");
              if(args[1] == undefined){
                  message.reply("**Nombre de message non défini**")
              }
              else{
                  let number = parseInt(args[1]);
                    if(isNaN(number)){
                      message.reply("**Nombre mal défini**")
                  }
                    else {
                        message.channel.bulkDelete(number).then(messages => {
                      message.channel.send("**Suppression de " + message.size + " messages réussi !**")
                      }).catch(err => {
                            message.channel.send("**Erreur de clear :**" + err);
                            console.log("Erreur de clear : " + err);
                      });
                  }
              }
          }
      }

      if(message.content.startsWith(prefix + "warn")){
          message.delete();
        if(message.member.hasPermission("BAN_MEMBERS")){
            if(!message.mentions.users.first()) return;
            user = message.mentions.users.first().id
            if(bdd["warn"][user] == 2){
                message.guild.members.ban(user)
            }
            else{
                if(!bdd["warn"][user]){
                    bdd["warn"][user] = 1
                    Savebdd();
                    message.channel.send(`**tu a recu 1 avertissement**`)
                }
                else{
                    bdd["warn"][user]++
                    Savebdd();
                    message.channel.send(`**tu a recu un 2e avertissements**`)
                }
            }
        }
    }

    if(message.content.startsWith(prefix + "divers")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("「DIVERS」")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        .addField(prefix + "merci", "`Envoye un merci`")
        .addField(prefix + "money", "`Compter votre argent`")
        .addField(prefix + "dance", "`Montrer comment vous dancer`")
        .addField(prefix + "0_0", "`Envoye shrug`")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "dance")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle(bot.user.tag + " dance pour vous")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/3ornkdtVzQfIRpwfug/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "0_0")){
        message.delete();
        message.channel.send("¯\_(ツ)_/¯")
    }

    if(message.content.startsWith(prefix + "money")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle(bot.user.tag + " compte son argent")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/14SAx6S02Io1ThOlOY/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "merci")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle(bot.user.tag + " vous remerci !")
        .setColor(config.color)
        .setImage("https://media.giphy.com/media/3og0IPElt1EVnbJ4KA/giphy.gif")
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "selfr")){
        message.delete();
        var embed = new Discord.RichEmbed()
        .setTitle("「SelfR」")
        .setColor(config.color)
        .setImage(config.image)
        .setURL(config.urlembed)
        .setFooter("SelfR Project", "https://www.platypusandbean.com/uploads/1/2/2/5/122505563/published/fe5f90e93e28cb9d02dc3e1a71f4e7aa21100b13r4-320-182-00.gif?1576257312")
        .addField(prefix + "mrpc", "`Envoye le SelfRPC`")
        .addField(prefix + "package", "`Envoye le SelfR Package`")
        .addField(prefix + "selfbot", "`Envoye le SelfR Project`")
        .addField(prefix + "mgithub", "`Envoye le GitHub`")
        .addField(prefix + "discord", "`Envoye le discord`")
        .addField(prefix + "2discord", "`Envoye le discord`")
        .addField(prefix + "3discord", "`Envoye le discord`")
        .addField(prefix + "vself", "`Envoye la version du selfbot`")
        message.channel.send(embed)
    }

    if(message.content.startsWith(prefix + "vself")){
        message.delete();
        message.channel.send("**Version du selfbot: 1.7.2 Bêta**")
    }

    if(message.content.startsWith(prefix + "discord")){
        message.delete();
        message.channel.send("**Notre Discord :** discord.gg/DJZWS3CnyB")
    }

    if(message.content.startsWith(prefix + "2discord")){
        message.delete();
        message.channel.send("**Notre Discord :** discord.gg/paradoxfr")
    }

    if(message.content.startsWith(prefix + "3discord")){
        message.delete();
        message.channel.send("**Notre Discord :** discord.gg/devfr")
    }

    if(message.content.startsWith(prefix + "mgithub")){
        message.delete();
        message.channel.send("**GitHub SelfR :** https://github.com/selfr-team/")
    }

    if(message.content.startsWith(prefix + "package")){
        message.delete();
        message.channel.send("**SelfR Package (1er au monde ?) :** https://github.com/selfr-team/selfr-package")
    }

    if(message.content.startsWith(prefix + "mrpc")){
        message.delete();
        message.channel.send("**SelfRPC (Full Custom) :** https://github.com/selfr-team/SelfRPC/")
    }

});

bot.login(token)

function Savebdd() {
    fs.writeFile("./bdd.json", JSON.stringify(bdd, null, 4), (err) => {
        if (err) message.channel.send("Une erreur est survenue.");
    });
}
