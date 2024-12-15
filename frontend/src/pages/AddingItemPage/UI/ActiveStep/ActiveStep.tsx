import { stepsCreateItem } from '@constants/AddingItemForm.constants';
import { useState } from 'react';

export const ActiveStep = () => {
   const [activeStep, _] = useState(0);

   return (
      <div className="flex gap-7">
         {stepsCreateItem.map((step, idx) => {
            const activeItem = idx === activeStep;
            return (
               <div key={idx} className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                     <div
                        className={`w-8 h-8 rounded-full flex justify-center items-center ${activeItem ? 'bg-black' : 'bg-[#D9D9D9]'}`}
                     >
                        <span
                           className={`text-2xl ${activeItem ? 'text-white' : 'text-[#7D7D7D]'}`}
                        >
                           {idx + 1}
                        </span>
                     </div>
                  </div>
                  <div>
                     <p
                        className={`font-inter text-md  antialiased font-feature-default ${activeItem ? 'text-black' : 'text-[#7D7D7D]'}`}
                     >
                        {step.title}
                     </p>
                  </div>
               </div>
            );
         })}
      </div>
   );
};
