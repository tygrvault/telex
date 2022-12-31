import type { BotCommand } from "../Interfaces";

export const command: BotCommand = {
    name: "echo",
    description: "I will repeat what you say",
    run: (ctx) => {
        const message = ctx.message.text.split(" ").slice(1).join(" ");
        if (!message) return ctx.reply("You need to provide a message to echo.");
        ctx.reply(message);
    }
}