import {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {trpc} from "../utils/trpc.ts";
import {httpBatchLink} from "@trpc/client";
import {MantineProvider} from "@mantine/core";
import TestCom from "./TestCom.tsx";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
            };
          },
        }),
      ],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <TestCom/>
        </MantineProvider>
      </QueryClientProvider>
    </trpc.Provider>
  );
}

export default App
