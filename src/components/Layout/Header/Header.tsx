import { icons } from '../../../assets/public/index';
export const Header = () => {
   return (
      <header>
         <div className="flex justify-between items-center p-2 px-6 border border-b-[#0000001A]">
            <div className="flex items-center gap-2">
               <div>
                  <img src={icons.baseLogo} alt="base-logo-svg" />
               </div>
               <h4 className="font-inter font-medium text-xl text-black bg-white antialiased font-feature-default">
                  BASE
               </h4>
            </div>
            <div className="flex flex-col items-start">
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
      </header>
   );
};
