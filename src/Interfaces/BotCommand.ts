import { Context, NarrowedContext } from "npm:telegraf";
import { MaybeArray } from "npm:telegraf/typings/util";
import { Message, Update } from "npm:typegram";

interface Run {
    (
        ctx: NarrowedContext<Context<Update>, {
            message: Update.New & Update.NonChannel & Message.TextMessage;
            update_id: number;
        }>,
    ): void;
}

export interface BotCommand {
    name: MaybeArray<string>;
    description: string;
    run: Run;
}