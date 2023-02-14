const { EmbedBuilder } = require("discord.js");

module.exports = async (client, query, queue) => {
    const embed = new EmbedBuilder()
        .setColor("#000001")
        .setDescription(`Hey7 Bu Aramada Bİr Sonuç Bulamadı :/ ${query}!`)

    queue.textChannel.send({ embeds: [embed] })
}

