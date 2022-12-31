import { Telegraf, Context } from "telegraf";
import { Update } from "typegram";
import { config } from "dotenv";
import path from "path";
import { readdirSync } from "fs";
import type { BotCommand } from "./Interfaces";

config();

const bot: Telegraf<Context<Update>> = new Telegraf(process.env.BOT_TOKEN as string);

const commandPath = path.join(__dirname, "/Commands");
readdirSync(commandPath).forEach((file) => {
    const { command }: { command: BotCommand } = require(`${commandPath}/${file}`);
    console.log("Loaded command: " + command.name + "")
    bot.command(command.name, (ctx) => command.run(ctx));
});

bot.launch();
console.log(`Server has started.`);

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));