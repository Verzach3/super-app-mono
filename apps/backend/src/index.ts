import cors from 'cors';

import {initTRPC} from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import {appRouter} from "@repo/backend-routers";

// created for each request
const createContext = ({req, res,}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create();

const app = express();
app.use(cors());
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.listen(3000);