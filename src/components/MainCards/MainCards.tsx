import { mainPageCardsData } from '@constants/MainPage.constants';

export const MainCards = () => {
   return (
      <div className="flex justify-center py-10">
         <div className="max-w-[70rem] max-h-[20rem] flex justify-center items-center gap-14">
            {mainPageCardsData.map((itemBox, idx) => {
               return (
                  <div
                     key={itemBox.id}
                     className="bg-[#F6F7FF] min-w-[34rem] h-full p-6 rounded-[30px]"
                  >
                     <div className="flex justify-between">
                        <div>
                           <h4 className="font-inter text-2xl text-black antialiased font-feature-default">
                              {itemBox.title}
                           </h4>
                        </div>
                        <div className="bg-[#E8EAFF] py-1 px-6 rounded-full">
                           <span className="font-inter text-base text-[#A0A3B9] antialiased font-feature-default">
                              {itemBox.tags}
                           </span>
                        </div>
                     </div>
                     <div className="flex justify-between pt-2">
                        <div className="max-w-72">
                           <span className="font-inter text-xl leading-7 antialiased font-feature-default text-[#191919]">
                              {itemBox.description}
                           </span>
                        </div>
                        <div className="mt-10">
                           <img
                              src={itemBox.icon}
                              alt={`${itemBox.tags}-icon`}
                           />
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};
