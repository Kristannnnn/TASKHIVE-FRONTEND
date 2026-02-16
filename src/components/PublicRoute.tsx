
import { Navigate } from "react-router-dom";
import { type ReactNode } from "react";
import { useAuthStore } from "../stores/authStore";

interface Props {
  children: ReactNode;
}

const PublicRoute = ({ children }: Props) => {
  const token = useAuthStore((state) => state.token);

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default PublicRoute;
