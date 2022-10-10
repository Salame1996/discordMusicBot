const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("pause").setDescription("Pauses the music"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("El queue esta vacio")

		queue.setPaused(true)
        await interaction.editReply("Musica esta en pausa! Usa `/resume` para volver a escuhar")
	},
}