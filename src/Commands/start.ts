import type { BotCommand } from "../Interfaces";

export const command: BotCommand = {
    name: "start",
    description: "Starts the bot",
    run: (ctx) => {
        ctx.reply(`Hello! My name is ${ctx.botInfo?.first_name}. Nice to meet you! My functions are limited, but I can do some things. Type /help to see what I can do.`);
    }
}