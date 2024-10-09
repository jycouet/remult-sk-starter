import { remultSveltekit } from "remult/remult-sveltekit";
import { createPostgresDataProvider } from "remult/postgres";
import { DATABASE_URL } from "$env/static/private";
import { building } from "$app/environment";
import { Task } from "../demo/todo/Task";
import { User } from "../modules/auth";
import { getUserFromRequest } from "../modules/auth/server";

export const api = remultSveltekit({
  getUser: getUserFromRequest,
  initApi: async () => {
    // await User.createDemoUsers();
  },
  // dataProvider: building
  //   ? undefined
  //   : createPostgresDataProvider({
  //       connectionString: DATABASE_URL,
  //     }),
  admin: true,
  entities: [Task, User],
});
