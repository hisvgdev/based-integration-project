import React from 'react';

import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
      <section>
         <Header />
         <div className="flex">
            <div>
               <Sidebar />
            </div>
            <div className="flex-1">{children}</div>
         </div>
      </section>
   );
};
