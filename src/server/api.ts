import { remultSveltekit } from "remult/remult-sveltekit";
import { createPostgresDataProvider } from "remult/postgres";
import { DATABASE_URL } from "$env/static/private";
import { building } from "$app/environment";
import { Roles, User } from "$modules/auth";
import { getUserFromRequest } from "$modules/auth/server";
import type { ClassType } from "remult";
import { media } from "$modules/media/server";

export const api = remultSveltekit({
  admin: true,
  // admin: Roles.admin,
  entities: [...media.entities, User],
  getUser: getUserFromRequest,
  initApi: async () => {
    // await User.createDemoUsers();
    await media.initApi?.();
  },
  // dataProvider: building
  //   ? undefined
  //   : createPostgresDataProvider({
  //       connectionString: DATABASE_URL,
  //     }),
});

// From remult?
export type Module = {
  /** @default 0 */
  priority: number;
  key: string;
  caption: string;
  entities: ClassType<unknown>[];
  initApi: () => void;
};
