import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient=new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <Router />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
