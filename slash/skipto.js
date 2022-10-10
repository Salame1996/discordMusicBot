const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("skipto").setDescription("Te manda a una rola especifica en el queue ")
    .addNumberOption((option) => 
        option.setName("tracknumber").setDescription("Donde quieres saltar en el queue").setMinValue(1).setRequired(true)),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("El queue esta vacio")

        const trackNum = interaction.options.getNumber("tracknumber")
        if (trackNum > queue.tracks.length)
            return await interaction.editReply("No existe ese numero en el queue")
		queue.skipTo(trackNum - 1)

        await interaction.editReply(`Se salto al numero ${trackNum}`)
	},
}