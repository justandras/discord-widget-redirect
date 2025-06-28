import { APIGuildWidget } from 'discord-api-types/v10';

const API_BASE_URL = 'https://discord.com/api/v10/';

export default class DiscordApi {
	static async getWidget(guildId: string): Promise<APIGuildWidget> {
		const res = await fetch(`${API_BASE_URL}/guilds/${guildId}/widget.json`);
		if (!res.ok) throw new Error(`Failed to fetch widget for guild ${guildId}: ${res.statusText}`);
		return res.json();
	}
}
