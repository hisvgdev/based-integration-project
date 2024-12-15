import { LoginForm } from '@components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

import { RoutePath } from '../../types/RoutePath.enum';

export default function AuthPage() {
   return (
      <section className="w-full h-screen flex flex-col justify-center items-center">
         <div className="flex flex-col items-center gap-4">
            <div>
               <h4 className="font-inter text-xl text-black bg-white antialiased font-feature-default">
                  BASE
               </h4>
            </div>
            <LoginForm />
         </div>
         <div className="flex flex-col items-center">
            <div>
               <h4 className="font-inter text-base text-black bg-white antialiased font-feature-default">
                  Еще нет аккаунт?
               </h4>
            </div>
            <div>
               <Link to={RoutePath.REGISTER}>
                  <button type="button" className="text-[#7D7D7D] text-md">
                     Зарегестрироваться
                  </button>
               </Link>
            </div>
         </div>
      </section>
   );
}
