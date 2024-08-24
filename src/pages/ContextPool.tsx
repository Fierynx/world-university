import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { CountryProvider } from "../context/CountryContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function ContextPool() {
  return (
    <QueryClientProvider client={queryClient}>
      <CountryProvider>
        <Outlet />
      </CountryProvider>
    </QueryClientProvider>
  );
}