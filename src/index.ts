import InviteResolver from './InviteResolver';

export interface Env {
  DISCORD_SERVER_ID: string;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		try {
			const inviteCode = await InviteResolver.resolve(env.DISCORD_SERVER_ID);
			return Response.redirect(inviteCode, 307);
		} catch (error) {
			console.error('InviteResolver error:', error);

			return new Response(`Not Found: ${(error as Error).message}`, {
				status: 404,
				headers: { 'Content-Type': 'text/plain' },
			});
		}
	},
} satisfies ExportedHandler<Env>;