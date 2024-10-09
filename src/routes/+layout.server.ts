import { remult, withRemult } from "remult";
import type { LayoutServerLoad } from "./$types";

export const load = (async (event) => {
  // console.log(`remult.user`, );

  // const remultUser = withRemult(async () => {
  //   return remult.initUser();
  // });
  // const session = await event.locals.auth();
  // console.log(`session`, session);

  return {
    remultUser: remult.user,
  };
}) satisfies LayoutServerLoad;
