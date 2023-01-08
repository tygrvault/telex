import type { BotCommand } from "../Interfaces/index.ts";

export const command: BotCommand = {
    name: "insert",
    description: "Inserts a key and value into the database.",
    run: async (ctx, db) => {
        const args = ctx.message.text.split(" ").slice(1);

        if (!args[0]) return ctx.reply("You need to provide a key.");
        if (!args[1]) return ctx.reply("You need to provide a value.");

        const result = await db.findOne({ key: args[0] });
        if (result) return ctx.reply("That key already exists.");

        db.insertOne({ key: args[0], value: args[1] });

        ctx.reply(`Set "${args[0]}" to "${args[1]}".`);
    }
}