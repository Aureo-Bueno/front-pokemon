import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./routes";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/global";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
