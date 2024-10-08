import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { CountryProvider } from "../context/CountryContext";
import { SkeletonTheme } from "react-loading-skeleton";

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
        <SkeletonTheme baseColor="#e0e0e0" highlightColor="#ffffff">
          <Outlet />
        </SkeletonTheme>
      </CountryProvider>
    </QueryClientProvider>
  );
}