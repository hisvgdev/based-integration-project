import { FieldInput } from '@components/FieldInput/FieldInput';
import { SubmitBtn } from '@components/SubmitBtn/SubmitBtn';
import { AuthField } from '@constants/AuthForm.constants';
import { Controller, useForm } from 'react-hook-form';

export const AuthForm = () => {
   const {
      trigger,
      control,
      handleSubmit,
      formState: { errors, isValid },
      setValue,
   } = useForm({
      mode: 'onChange',
   });

   const handleInputValue = (name: string, value: string) => {
      setValue(name, value);
      trigger(name);
   };

   const handleOnSubmit = (data: any) => {
      try {
         const userRegisterData = data;
         localStorage.setItem(
            'user_currently_register_data',
            JSON.stringify(userRegisterData)
         );
      } catch (error) {
         console.error("Sorry but we don't send your data!");
      }
   };
   return (
      <form onSubmit={handleSubmit(handleOnSubmit)}>
         <div className="min-w-[23rem] h-auto">
            <div className="flex flex-col border border-[#ACACAC] rounded-xl">
               {AuthField.map((inputField) => (
                  <Controller
                     key={inputField.id}
                     control={control}
                     name={inputField.name}
                     rules={{
                        required: `${inputField.placeholder} обязательно`,
                     }}
                     render={({ field }) => (
                        <div>
                           {field.name !== 'password' ? (
                              <>
                                 <FieldInput
                                    id={inputField.id}
                                    name={inputField.name}
                                    type={inputField.type}
                                    placeholder={`${inputField.placeholder}`}
                                    className={`w-full p-3 border-b rounded-xl border-b-[#ACACAC] focus:outline-none ${
                                       errors[inputField.name]
                                          ? 'border-red-500'
                                          : 'border-[#ACACAC]'
                                    }`}
                                    value={field.value || ''}
                                    onChange={(e) => {
                                       const { value } = e.target;
                                       handleInputValue(inputField.name, value);
                                       field.onChange(e.target.value);
                                    }}
                                    required={inputField.required}
                                 />
                                 {errors[inputField.name] && (
                                    <div className="flex justify-center">
                                       <span className="text-red-500 text-xs">
                                          {
                                             errors[inputField.name]
                                                ?.message as string
                                          }
                                       </span>
                                    </div>
                                 )}
                              </>
                           ) : (
                              <>
                                 <FieldInput
                                    id={inputField.id}
                                    name={inputField.name}
                                    type={inputField.type}
                                    placeholder={`${inputField.placeholder}`}
                                    className={`w-full p-3 rounded-full focus:outline-none ${
                                       errors[inputField.name]
                                          ? 'border-red-500'
                                          : 'border-[#ACACAC]'
                                    }`}
                                    value={field.value || ''}
                                    onChange={(e) => {
                                       const { value } = e.target;
                                       handleInputValue(inputField.name, value);
                                       field.onChange(e.target.value);
                                    }}
                                    required={inputField.required}
                                 />
                                 {errors[inputField.name] && (
                                    <div className="flex justify-center">
                                       <span className="text-red-500 text-xs">
                                          {
                                             errors[inputField.name]
                                                ?.message as string
                                          }
                                       </span>
                                    </div>
                                 )}
                              </>
                           )}
                        </div>
                     )}
                  />
               ))}
            </div>
         </div>
         <div className="flex justify-center py-5">
            <SubmitBtn titleBtn="Зарегистрироваться" disabled={!isValid} />
         </div>
      </form>
   );
};
