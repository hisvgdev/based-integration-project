import { Layout } from '@components/Layout/Layout';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { RoutePath } from '../../types/RoutePath.enum';

interface ProtectedRouteProps {
   children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
   const { isAuthenticated } = useAuth();

   if (!isAuthenticated) {
      return <Navigate to={RoutePath.AUTH} />;
   }

   return <Layout>{children}</Layout>;
};

export default ProtectedRoute;
