/**
 * This a minimal tRPC server
 */
import { createHTTPServer } from '@trpc/server/adapters/standalone';
import {appRouter} from "@repo/backend-routers";
const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);
