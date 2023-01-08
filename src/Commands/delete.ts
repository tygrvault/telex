import type { BotCommand } from "../Interfaces/index.ts";

export const command: BotCommand = {
    name: "delete",
    description: "Deletes a value from the database.",
    run: async (ctx, db) => {
        const args = ctx.message.text.split(" ").slice(1);

        const result = await db.findOne({ key: args[0] });
        if (!result) return ctx.reply("That key does not exist.");

        db.deleteOne({ key: args[0] });

        ctx.reply(`Deleted "${args[0]}".`);
    }
}