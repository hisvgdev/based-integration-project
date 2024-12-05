import { createContext, ReactNode, useState, useCallback } from 'react';

import { IAuthContextType } from './AuthContext.types';

export const AuthContext = createContext<IAuthContextType | undefined>(
   undefined
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const loginUser = useCallback(async (username: string, password: string) => {
      try {
         setError(null);
         if (username && password) {
            setIsAuthenticated(true);
         } else {
            throw new Error('Invalid login username or password');
         }
      } catch (err) {
         setIsAuthenticated(false);
         setError((err as Error).message);
      }
   }, []);

   const logout = useCallback(() => {
      setIsAuthenticated(false);
   }, []);

   return (
      <AuthContext.Provider
         value={{ isAuthenticated, loginUser, logout, error }}
      >
         {children}
      </AuthContext.Provider>
   );
};
