const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("quit").setDescription("Manda al bot a dormir"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("El queue esta vacio")

		queue.destroy()
        await interaction.editReply("Pilas Jose Delgado!")
	},
}