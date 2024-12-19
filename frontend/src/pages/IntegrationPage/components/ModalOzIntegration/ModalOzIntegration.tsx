import axios from 'axios';

export const ModalOzIntegration = ({ onClose }: { onClose: () => void }) => {
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const apiKey = formData.get('api-key') as string;
      const clientId = formData.get('client-id') as string;

      try {
         const payload = {
            apiKey,
            clientId,
         };
         const response = await axios.post(
            'http://localhost:8081/oz-integration/token',
            { payload }
         );
         if (response.status === 201 || response.status === 200) {
            localStorage.setItem('oz-integration-key', JSON.stringify(payload));
            onClose();
         } else {
            alert('Ошибка при подключении: ' + response.data.messsage);
         }
      } catch (error) {
         alert('Произошла ошибка при отправке запроса. Попробуйте еще раз.');
      }
   };
   return (
      <div
         id="integration-oz-modal"
         tabIndex={-1}
         aria-hidden="true"
         className={`flex justify-center items-center fixed top-0 right-0 left-0 z-50 w-full h-full bg-black bg-opacity-50`}
      >
         <div className="relative p-4 w-full max-w-md">
            <div className="relative bg-white rounded-lg shadow">
               <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900">
                     Интегрирация с Ozon
                  </h3>
                  <button
                     type="button"
                     className="end-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                     data-modal-hide="authentication-modal"
                     onClick={onClose}
                  >
                     <svg
                        className="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                     >
                        <path
                           stroke="currentColor"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                     </svg>
                     <span className="sr-only">Close modal</span>
                  </button>
               </div>
               <div className="p-4 md:p-5">
                  <form onSubmit={handleSubmit} className="space-y-4">
                     <div>
                        <label
                           htmlFor="api-key"
                           className="block mb-2 text-sm font-medium"
                        >
                           Api Ключ
                        </label>
                        <input
                           type="text"
                           name="api-key"
                           id="api-key"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                           placeholder="Напишите свой api ключ из личного кабинета..."
                           required
                        />
                     </div>
                     <div>
                        <label
                           htmlFor="client-id"
                           className="block mb-2 text-sm font-medium"
                        >
                           Ваш Id клиента
                        </label>
                        <input
                           type="text"
                           name="client-id"
                           id="client-id"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                           placeholder="Напишите свой id клиента из личного кабинета..."
                           required
                        />
                     </div>
                     <button
                        type="submit"
                        className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                     >
                        Подключить
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};
