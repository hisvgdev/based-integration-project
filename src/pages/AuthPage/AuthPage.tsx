import { AuthForm } from '@components/AuthForm/AuthForm';

export default function AuthPage() {
   return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
         <div className="flex flex-col items-center gap-4">
            <div>
               <h4 className="font-inter text-xl text-black bg-white antialiased font-feature-default">
                  BASE
               </h4>
            </div>
            <div>
               <h2 className="font-inter text-3xl text-black bg-white antialiased font-feature-default">
                  Регистрация
               </h2>
            </div>
            <AuthForm />
         </div>
         <div className="flex flex-col items-center">
            <div>
               <h4 className="font-inter text-base text-black bg-white antialiased font-feature-default">
                  Уже есть аккаунт?
               </h4>
            </div>
            <div>
               <button type="button" className="text-[#7D7D7D] text-sm">
                  Войти
               </button>
            </div>
         </div>
      </div>
   );
}
