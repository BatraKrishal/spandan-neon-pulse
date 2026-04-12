import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { useEffect } from 'react';
import { authAPI } from '../lib/api';

export const ProtectedRoute = () => {
  const { isAuthenticated, isLoading, setUser, setToken, setIsLoading } = useAuthStore();

  useEffect(() => {
    const initAuth = async () => {
      if (isAuthenticated) {
        setIsLoading(false);
        return;
      }
      try {
        // Here we could add a check if we store short lived token, but cookies go automatically
        // For simplicity, we just assume if there's no state, user isn't auth'd.
        // Wait, realistically we need an endpoint like /auth/me to get the current user, or test `/refresh`.
        // Let's call /refresh to try to get a new token & user data if refresh token cookie exists.
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
  }, [isAuthenticated, setUser, setIsLoading]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-background"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};
