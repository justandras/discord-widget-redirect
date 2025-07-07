# Discord widget redirect
Cloudflare Worker to redirect users to your discord server using the widget API.

> [!IMPORTANT] 
> Make sure to enable the Server Widget by going to <kbd><kbd>Server Settings</kbd> ⇒ <kbd>Engagement</kbd></kbd>, checking <kbd>Enable Server Widget</kbd> and selecting an <kbd>Invite Channel</kbd>.

## Deploy on Cloudflare

- Clone this repo
- run `npm install`
- run `wrangler deploy` and follow the instructions
- Go to your Cloudflare Account Home page on [dash.cloudflare.com](https://dash.cloudflare.com)
- <kbd>Compute (Workers)</kbd> ⇒ <kbd>Workers & Pages</kbd>
- Select your deployed worker and go to <kbd>Settings</kbd> ⇒ <kbd>Domains & Routes</kbd> and add a domain or subdomain
- Go to <kbd>Settings</kbd> ⇒ <kbd>Variables and Secrets</kbd> and add your Discord server ID as a plaintext variable named `DISCORD_SERVER_ID`

---

## Setting up a development environment

- Clone this repo
- `npm install`
- Run `npm run dev` to get the development server up
- Access it through http://localhost:8787/

---
This project was build on the foundation of [Invidget](https://github.com/SwitchbladeBot/invidget).
