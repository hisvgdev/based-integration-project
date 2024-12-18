import { Loader } from '@components/Loader/Loader';
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';
import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { RoutePath } from '../types/RoutePath.enum';

const LazyAuthPage = lazy(() => import('@pages/AuthPage/AuthPage'));
const LazyRegisterPage = lazy(() => import('@pages/RegisterPage/RegisterPage'));
const LazyMainPage = lazy(() => import('@pages/MainPage/MainPage'));
const LazyNotFoundPage = lazy(() => import('@pages/NotFoundPage/NotFoundPage'));
const LazyAddingItemPage = lazy(
   () => import('@pages/AddingItemPage/AddingItemPage')
);
const LazyListItemsPage = lazy(
   () => import('@pages/ListItemsPage/ListItemsPage')
);
const LazyIntegrationPage = lazy(
   () => import('@pages/IntegrationPage/IntegrationPage')
);

export const routerConfig = createBrowserRouter([
   {
      path: RoutePath.REGISTER,
      element: (
         <Suspense fallback={<Loader />}>
            <LazyRegisterPage />
         </Suspense>
      ),
   },
   {
      path: RoutePath.AUTH,
      element: (
         <Suspense fallback={<Loader />}>
            <LazyAuthPage />
         </Suspense>
      ),
   },
   {
      path: RoutePath.MAIN,
      element: (
         <ProtectedRoute>
            <Suspense fallback={<Loader />}>
               <LazyMainPage />
            </Suspense>
         </ProtectedRoute>
      ),
   },
   {
      path: RoutePath.ADDING_ITEM,
      element: (
         <ProtectedRoute>
            <Suspense fallback={<Loader />}>
               <LazyAddingItemPage />
            </Suspense>
         </ProtectedRoute>
      ),
   },
   {
      path: RoutePath.LIST_ITEM,
      element: (
         <ProtectedRoute>
            <Suspense fallback={<Loader />}>
               <LazyListItemsPage />
            </Suspense>
         </ProtectedRoute>
      ),
   },
   {
      path: RoutePath.ADDING_INTEGRATION,
      element: (
         <ProtectedRoute>
            <Suspense fallback={<Loader />}>
               <LazyIntegrationPage />
            </Suspense>
         </ProtectedRoute>
      ),
   },
   {
      path: RoutePath.NOT_FOUND,
      element: (
         <Suspense fallback={<Loader />}>
            <LazyNotFoundPage />
         </Suspense>
      ),
   },
]);
