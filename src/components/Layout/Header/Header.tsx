import { useAuth } from '@hooks/useAuth';
import { Link } from 'react-router-dom';

import { icons } from '../../../assets/public/index';
import { RoutePath } from '../../../types/RoutePath.enum';

export const Header = () => {
   const { logout } = useAuth();
   return (
      <header>
         <div className="flex justify-between items-center p-2 px-10 border border-b-[#0000001A]">
            <div className="flex items-center gap-2">
               <div>
                  <img src={icons.baseLogo} alt="base-logo-svg" />
               </div>
               <Link
                  to={RoutePath.MAIN}
                  className="font-inter font-medium text-xl text-black bg-white antialiased font-feature-default"
               >
                  BASE
               </Link>
            </div>
            <div className="flex flex-row items-center gap-10">
               <div className="flex flex-row items-start gap-3">
                  <div className="h-10 w-10 bg-black rounded-full" />
                  <div>
                     <div>
                        <span className="font-inter text-md text-[#9D9D9D] bg-white antialiased font-feature-default">
                           Никита
                        </span>
                     </div>
                     <div>
                        <button type="button">
                           <span className="font-inter text-sm text-black bg-white antialiased font-feature-default">
                              BASE
                           </span>
                        </button>
                     </div>
                  </div>
               </div>
               <div>
                  <button type="button" onClick={logout}>
                     <img
                        src={icons.exitFromAccountIcon}
                        alt="exit-from-account-svg"
                     />
                  </button>
               </div>
            </div>
         </div>
      </header>
   );
};
