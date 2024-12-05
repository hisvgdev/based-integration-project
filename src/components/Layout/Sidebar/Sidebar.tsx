import { expandedRouteItems } from '@constants/Sidebar.constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
   const [isExpandedItem, setIsExpandedItem] = useState(true);
   const handleIsExpectedItem = () => setIsExpandedItem(!isExpandedItem);
   return (
      <section>
         <div className="min-w-64 h-screen border border-r-2 border-[#E6E6E6]">
            <div className="px-7 py-6">
               <div className="flex flex-col items-start gap-4">
                  {expandedRouteItems.map((item, idx) => {
                     return (
                        <div key={item.id}>
                           <div className="flex gap-[0.4rem]">
                              <div>
                                 <img
                                    src={item.icon}
                                    alt={`icon-${item.title}`}
                                 />
                              </div>
                              <div>
                                 {item.type === 'button' ? (
                                    <button
                                       type="button"
                                       onClick={handleIsExpectedItem}
                                    >
                                       {item.title}
                                    </button>
                                 ) : (
                                    <Link to={item.routeLink as string}>
                                       {item.title}
                                    </Link>
                                 )}
                              </div>
                           </div>
                           <div className="px-8">
                              {isExpandedItem && (
                                 <div className="flex flex-col gap-2">
                                    {item.children?.map((childItem, idx) => {
                                       return (
                                          <div key={childItem.id}>
                                             <div>
                                                <Link to={childItem.routeLink}>
                                                   {childItem.title}
                                                </Link>
                                             </div>
                                          </div>
                                       );
                                    })}
                                 </div>
                              )}
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>
      </section>
   );
};
