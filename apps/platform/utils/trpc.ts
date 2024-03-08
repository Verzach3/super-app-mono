import { createTRPCReact } from '@trpc/react-query';
import type {AppRouter} from "@repo/backend-routers";

export const trpc = createTRPCReact<AppRouter>();