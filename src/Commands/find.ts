import type { BotCommand } from "../Interfaces/index.ts";

export const command: BotCommand = {
    name: "find",
    description: "Finds a value in the database.",
    run: async (ctx, db) => {
        const args = ctx.message.text.split(" ").slice(1);

        const result = await db.findMany({ key: args[0] });
        if (!result) return ctx.reply("That key does not exist.");

        ctx.reply(`The value of ${args[0]} is ${result[0].value}`);
    }
}