import { Context, Telegraf } from "npm:telegraf";
import { Update } from "npm:typegram";
import * as path from "https://deno.land/std@0.170.0/path/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.0/mod.ts";
import { BotCommand } from "./Interfaces/BotCommand.ts";
import { Database } from 'https://deno.land/x/aloedb@0.9.0/mod.ts'

config({ export: true });

function getPath(location: string) {
    return path.join(new URL(".", import.meta.url).pathname, location).slice(1);
}

const db = new Database(getPath("Database/Settings.json"));

const bot: Telegraf<Context<Update>> = new Telegraf(Deno.env.get("BOT_TOKEN") as string);
let commandPath = path.join(new URL('.', import.meta.url).pathname, "/Commands");
if (Deno.build.os === "windows") commandPath = commandPath.slice(1);

for (const file of Deno.readDirSync(commandPath)) {
    const { command }: { command: BotCommand } = await import(`./Commands/${file.name}`);
    console.log("Loaded command: " + command.name);
    bot.command(command.name, (ctx) => command.run(ctx, db));
}

bot.launch();
console.log("Bot has started.");