// export { handle } from "$modules/auth/server";

import { sequence } from "@sveltejs/kit/hooks";

import { handle as handleAuth } from "$modules/auth/server";
import type { Handle } from "@sveltejs/kit";
import { api } from "./server/api";

export const handleRemult: Handle = async ({ event, resolve }) => {
  return await api.withRemult(event, async () => {
    return resolve(event);
  });
};

export const handle = sequence(handleAuth, handleRemult);
