import axios from 'axios';
import { useEffect, useState } from 'react';

import { ModalOzIntegration } from './components/ModalOzIntegration/ModalOzIntegration';
import { ModalWbIntegration } from './components/ModalWbIntegration/ModalWbIntegration';
import { icons } from '../../assets/public/index';

export default function IntegrationPage() {
   const [wbIntegrationIsOpen, setWbIntegrationIsOpen] =
      useState<boolean>(false);
   const [ozIntegrationIsOpen, setOzIntegrationIsOpen] =
      useState<boolean>(false);
   const [isConnectedWb, setIsConnectedWb] = useState(false);
   const [isTokenSend, setIsTokenSend] = useState(false);

   const [expandedWbInformation, setExpandedWbInformation] = useState(false);
   const [expandedOzInformation, setExpandedOzInformation] = useState(false);

   const handleOpenWbIntegration = () => setWbIntegrationIsOpen(true);
   const handleCloseWbIntegration = () => setWbIntegrationIsOpen(false);

   const handleOpenOzIntegration = () => setOzIntegrationIsOpen(true);
   const handleCloseOzIntegration = () => setOzIntegrationIsOpen(false);

   const toggleWbExpandedInformation = () =>
      setExpandedWbInformation(!expandedWbInformation);

   const toggleOzExpandedInformation = () =>
      setExpandedOzInformation(!expandedOzInformation);

   const handleCheckIfConnectedWb = async () => {
      const getToken = localStorage.getItem('wb-token');
      if (!getToken) {
         setIsConnectedWb(false);
         return;
      }
      try {
         const response = await axios.get(
            'https://common-api.wildberries.ru/ping',
            {
               headers: {
                  Authorization: `Bearer ${getToken}`,
               },
            }
         );
         setIsConnectedWb(true);
         return response.data;
      } catch (error) {
         setIsConnectedWb(false);
         console.error('Error to connected in wildberries API');
      }
   };

   useEffect(() => {
      if (isTokenSend) {
         handleCheckIfConnectedWb();
      }
   }, [isTokenSend]);

   return (
      <>
         {wbIntegrationIsOpen && (
            <ModalWbIntegration
               setIsTokenSend={setIsTokenSend}
               onClose={handleCloseWbIntegration}
            />
         )}
         {ozIntegrationIsOpen && (
            <ModalOzIntegration onClose={handleCloseOzIntegration} />
         )}
         <section>
            <div>
               <div className="p-4 px-56">
                  <h3 className="text-3xl">Интеграция с маркетплейсами</h3>
               </div>
            </div>
            <div className="w-full py-3 flex flex-col justify-center items-center gap-3">
               <div className="w-full flex justify-between bg-gray-50 py-2 px-5 shadow-2xl rounded-lg max-w-screen-lg">
                  <div className="flex flex-col gap-1">
                     <div className="flex items-center gap-3">
                        <div>
                           <img src={icons.wildberriesLogo} alt="wb-icon" />
                        </div>
                        <div>
                           <button
                              type="button"
                              onClick={toggleWbExpandedInformation}
                           >
                              Wildberries
                           </button>
                        </div>
                     </div>
                     {expandedWbInformation && (
                        <div className="flex flex-col py-4">
                           <div>
                              <h3 className="text-md">BASE</h3>
                           </div>
                           <div>
                              <span
                                 className="text-sm"
                                 style={{
                                    color: isConnectedWb ? '#81E08A' : 'red',
                                 }}
                              >
                                 {isConnectedWb
                                    ? 'Подключено'
                                    : 'Не подключено'}
                              </span>
                           </div>
                        </div>
                     )}
                  </div>
                  <div>
                     <button
                        type="button"
                        className="text-[#7D7D7D]"
                        data-modal-target="integration-wb-modal"
                        data-modal-toggle="integration-wb-modal"
                        onClick={handleOpenWbIntegration}
                     >
                        Подключить
                     </button>
                  </div>
               </div>
               <div className="w-full flex justify-between bg-gray-50 py-2 px-5 shadow-2xl rounded-lg max-w-screen-lg">
                  <div className="flex items-center gap-3">
                     <div>
                        <img src={icons.ozonLogo} alt="ozon-icon" />
                     </div>
                     <div>
                        <button type="button" onClick={handleOpenOzIntegration}>
                           Ozon
                        </button>
                     </div>
                  </div>
                  <div>
                     <button
                        type="button"
                        className="text-[#7D7D7D]"
                        data-modal-target="integration-oz-modal"
                        data-modal-toggle="integration-oz-modal"
                        onClick={handleOpenOzIntegration}
                     >
                        Подключить
                     </button>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
