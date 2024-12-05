import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { RoutePath } from '../types/RoutePath.enum';

const LazyAuthPage = lazy(() => import('@pages/AuthPage/AuthPage'));

export const routerConfig = createBrowserRouter([
   {
      path: RoutePath.AUTH,
      element: (
         <Suspense fallback={<div>loading...</div>}>
            <LazyAuthPage />
         </Suspense>
      ),
   },
   {
      path: RoutePath.REGISTER,
      element: (
         <Suspense fallback={<div>loading...</div>}>
            <LazyAuthPage />
         </Suspense>
      ),
   },
   {
      path: RoutePath.NOT_FOUND,
      element: (
         <ProtectedRoute>
            <div>not found</div>
         </ProtectedRoute>
      ),
   },
]);
