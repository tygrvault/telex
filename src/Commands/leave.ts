import type { BotCommand } from "../Interfaces/index.ts";

export const command: BotCommand = {
    name: "leave",
    description: "I will leave the chat (Admin)",
    run: (ctx) => {
        if (ctx.chat.type === "private") return ctx.reply(`I can't leave a private chat, Stoopid.`);
        if (ctx.message.from.id === parseInt(Deno.env.get("OWNER_ID") as string)) return ctx.leaveChat();
        ctx.reply(`You are not my owner, so I'm not going to listen to you.`);
    }
}