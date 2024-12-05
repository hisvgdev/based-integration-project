import { FieldInput } from '@components/FieldInput/FieldInput';
import { SubmitBtn } from '@components/SubmitBtn/SubmitBtn';

export const AuthForm = () => {
   return (
      <form>
         <div className="min-w-[23rem] h-auto">
            <div className="flex flex-col border border-[#ACACAC] rounded-xl">
               <div>
                  <FieldInput
                     id="text"
                     name="text"
                     type="text"
                     placeholder="Имя"
                     className="w-full p-3 rounded-full focus:outline-none"
                     value=""
                     required={false}
                  />
               </div>
               <div>
                  <FieldInput
                     id="number"
                     name="number"
                     type="number"
                     placeholder="Телефон"
                     value=""
                     className="w-full border border-t-[#ACACAC] p-3 focus:outline-none"
                     required={false}
                  />
               </div>
               <div>
                  <FieldInput
                     id="mail"
                     name="mail"
                     type="mail"
                     placeholder="Email"
                     value=""
                     className="w-full border border-b-[#ACACAC] p-3 focus:outline-none"
                     required={false}
                  />
               </div>
               <div>
                  <FieldInput
                     id="password"
                     name="password"
                     type="password"
                     placeholder="Пароль"
                     value=""
                     className="w-full rounded-full p-3 focus:outline-none"
                     required={false}
                  />
               </div>
            </div>
         </div>
         <div className="flex justify-center py-5">
            <SubmitBtn titleBtn="Зарегестрироваться" />
         </div>
      </form>
   );
};
