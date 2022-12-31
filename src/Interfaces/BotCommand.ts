import { Context, NarrowedContext } from "telegraf";
import { MaybeArray } from "telegraf/typings/util";
import { Message, Update } from "typegram";

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