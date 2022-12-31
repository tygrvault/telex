import type { BotCommand } from "../Interfaces";

export const command: BotCommand = {
    name: "help",
    description: "Shows this message",
    run: (ctx) => {
        ctx.reply(`I can do the following things:\n/help - Shows this message\n/quit - I will leave the chat\n/echo - I will repeat what you say\n/quit - I will leave the chat (Admin)`);
    }
}