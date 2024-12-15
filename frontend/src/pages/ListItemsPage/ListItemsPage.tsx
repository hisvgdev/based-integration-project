import { useEffect, useState } from 'react';

import { icons } from '../../assets/public/index';

export default function ListItemsPage() {
   const [products, setProducts] = useState([]);
   const [loading, setLoading] = useState(false);

   const fetchProducts = async () => {
      setLoading(true);
      try {
         const response = await fetch(
            'https://content-api.wildberries.ru/ping',
            {
               headers: {
                  Autorization: `Bearer eyJhbGciOiJFUzI1NiIsImtpZCI6IjIwMjQwODE5djEiLCJ0eXAiOiJKV1QifQ.eyJlbnQiOjEsImV4cCI6MTc0MDA4MjYxMywiaWQiOiI4NWI1OTBhYy1iYTM2LTQ2ZmUtYThlZi1iNWY3NTkwYWM3NzYiLCJpaWQiOjQ5ODExMjk0LCJvaWQiOjE3NTkyMywicyI6ODE5MCwic2lkIjoiMzQ2ODY2M2UtYjNkMy00MzY4LWJjNGQtYjA0MDAxYTcyNThiIiwidCI6ZmFsc2UsInVpZCI6NDk4MTEyOTR9.8lzW8ussI8Dj4AsxOoJzGoAHuWqHjUqH1q05haPHts4edCUlPqeFKLVGVHKZLFBLObkdYtkItNq_UpNTDkvCAQ`,
               },
            }
         );
         const data = await response.json();

         const mergedProducts = data.reduce((acc, product) => {
            const existingProduct = acc.find(
               (item) => item.name === product.name
            );
            if (existingProduct) {
               existingProduct.stock += product.stock;
            } else {
               acc.push({ ...product });
            }
            return acc;
         }, []);

         setProducts(mergedProducts);
      } catch (error) {
         console.error('Ошибка загрузки товаров:', error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      fetchProducts();
   }, []);

   return (
      <main>
         <div className="flex flex-col gap-8">
            <div className="flex justify-between items-center gap-4 p-8">
               <div className="flex items-center gap-4 ">
                  <div>
                     <h2 className="font-inter text-3xl font-medium text-black antialiased font-feature-default">
                        Список товаров
                     </h2>
                  </div>
                  <div className="relative">
                     <div>
                        <input
                           type="text"
                           placeholder="Поиск"
                           className="border border-[#ACACAC] py-2 px-9 rounded-lg placeholder:text-md"
                        />
                     </div>
                     <div className="absolute w-5 top-3 left-2">
                        <img src={icons.searchIcon} alt="search-icon" />
                     </div>
                  </div>
                  <div>
                     <button
                        type="button"
                        className="bg-[#E3E3E3] p-2 rounded-md"
                     >
                        <img src={icons.filterIcon} alt="search-icon" />
                     </button>
                  </div>
               </div>
               <div>
                  <button
                     type="button"
                     className="bg-[#D9D9D9] text-[#7D7D7D] py-2 px-6 rounded-md"
                  >
                     Добавить товар
                  </button>
               </div>
            </div>
            {/* <div className="w-full bg-red-100 h-1" /> */}
         </div>
      </main>
   );
}
