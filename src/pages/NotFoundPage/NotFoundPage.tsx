import { Link } from 'react-router-dom';

import { RoutePath } from '../../types/RoutePath.enum';

export default function NotFoundPage() {
   return (
      <section className="bg-white h-screen flex justify-center items-center">
         <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
               <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                  404
               </h1>
               <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
                  Что-то пошло не так.
               </p>
               <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                  Извините мы не смогли найти страницу по вашему запросу.
               </p>
               <Link
                  to={RoutePath.MAIN}
                  className="inline-flex text-black focus:outline-none 
                  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
               >
                  Вернуться на главную страницу
               </Link>
            </div>
         </div>
      </section>
   );
}
