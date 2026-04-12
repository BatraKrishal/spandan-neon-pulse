import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useAuthStore } from "./store/authStore";
import { authAPI } from "./lib/api";
import Index from "./pages/Index";
import Events from "./pages/Events";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EventRegistration from "./pages/EventRegistration";
import { ProtectedRoute } from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => {
  const { setUser, setToken, setIsLoading } = useAuthStore();

  useEffect(() => {
    const initAuth = async () => {
      try {
        const response = await authAPI.refresh();
        setUser(response.data.user);
        setToken(response.data.accessToken);
      } catch (err) {
        setUser(null);
        setToken(null);
      } finally {
        setIsLoading(false);
      }
    };
    initAuth();
  }, [setUser, setIsLoading]);

  return (
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/timeline" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/partners" element={<Index />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Example of protected route usage */}
          <Route element={<ProtectedRoute />}>
             <Route path="/register" element={<EventRegistration />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
