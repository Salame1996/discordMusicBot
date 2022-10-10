const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("shuffle").setDescription("baraja pealado"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("El queue esta vacio")

		queue.shuffle()
        await interaction.editReply(`Se han barajado ${queue.tracks.length} canciones sapo!`)
	},
}