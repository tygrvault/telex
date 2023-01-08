import type { BotCommand } from "../Interfaces/index.ts";

export const command: BotCommand = {
    name: "leave",
    description: "I will leave the chat (Admin)",
    run: async (ctx) => {
        if (ctx.chat.type === "private") return ctx.reply(`I can't leave a private chat, Stoopid.`);
        const admins = await ctx.getChatAdministrators();
        for (const admin of admins) if (admin.user.id === ctx.from.id) return ctx.leaveChat();
        ctx.reply(`You are not my owner, so I'm not going to listen to you.`);
    }
}