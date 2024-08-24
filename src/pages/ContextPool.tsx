import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus: false
    }
  }
});

export default function ContextPool() {
  return (
    <QueryClientProvider client={queryClient}>
         <Outlet />
    </QueryClientProvider>
  );
}