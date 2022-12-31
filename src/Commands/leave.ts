import type { BotCommand } from "../Interfaces";

export const command: BotCommand = {
    name: "leave",
    description: "I will leave the chat (Admin)",
    run: (ctx) => {
        if (ctx.chat.type === "private") return ctx.reply(`I can't leave a private chat, Stoopid.`);
        if (ctx.message.from.id === parseInt(process.env.OWNER_ID as string)) return ctx.leaveChat();
        ctx.reply(`You are not my owner, so I'm not going to listen to you.`);
    }
}