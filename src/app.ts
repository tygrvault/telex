import { Context, Telegraf } from "npm:telegraf";
import { Update } from "npm:typegram";
import * as path from "https://deno.land/std@0.170.0/path/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";

config({ export: true });

const bot: Telegraf<Context<Update>> = new Telegraf(Deno.env.get("BOT_TOKEN") as string);
const commandPath = path.join(new URL('.', import.meta.url).pathname, "/Commands").slice(1);

for (const file of Deno.readDirSync(commandPath)) {
    const { command } = await import(`./Commands/${file.name}`);
    console.log("Loaded command: " + command.name);
    bot.command(command.name, (ctx) => command.run(ctx));
}

bot.launch();
console.log("Bot has started.");