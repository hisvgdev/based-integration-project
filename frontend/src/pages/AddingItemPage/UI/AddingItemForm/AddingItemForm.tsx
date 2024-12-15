import { FieldInput } from '@components/FieldInput/FieldInput';
import {
   AddingItemDimestionAndWeightData,
   AddingItemField,
} from '@constants/AddingItemForm.constants';
import { Controller, useForm } from 'react-hook-form';

import { ActiveStep } from '../ActiveStep/ActiveStep';

export const AddingItemForm = () => {
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
      console.log(data);
   };

   return (
      <section className="flex justify-center max-w-3xl py-7">
         <div className="flex flex-col gap-8">
            <div>
               <h2 className="font-inter text-3xl font-medium text-black antialiased font-feature-default">
                  Создание товара
               </h2>
            </div>
            <ActiveStep />
            <div className="w-full">
               <form onSubmit={handleSubmit(handleOnSubmit)}>
                  {/* info about item */}
                  <div className="pb-4">
                     <h2 className="font-inter text-2xl font-medium text-black antialiased font-feature-default">
                        Информация о товаре
                     </h2>
                  </div>
                  {AddingItemField.map((inputField) => (
                     <Controller
                        key={inputField.id}
                        control={control}
                        name={inputField.name}
                        rules={{
                           required: `${inputField.placeholder} обязательно`,
                        }}
                        render={({ field }) => (
                           <div className="mb-4">
                              <FieldInput
                                 id={inputField.id}
                                 name={inputField.name}
                                 type={inputField.type}
                                 placeholder={inputField.placeholder}
                                 className={`w-full p-3 bg-[#EFF0FA] rounded-xl focus:outline-none ${
                                    errors[inputField.name]
                                       ? 'border-red-500'
                                       : 'border-[#ACACAC]'
                                 }`}
                                 value={field.value || ''}
                                 onChange={(e) => {
                                    const { value } = e.target;
                                    handleInputValue(inputField.name, value);
                                    field.onChange(value);
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
                           </div>
                        )}
                     />
                  ))}
                  {/* dimensions and weight */}
                  <div className="pb-4">
                     <h2 className="font-inter text-2xl font-medium text-black antialiased font-feature-default">
                        Габариты и вес
                     </h2>
                  </div>
                  {AddingItemDimestionAndWeightData.map((inputField) => (
                     <Controller
                        key={inputField.id}
                        control={control}
                        name={inputField.name}
                        rules={{
                           required: `${inputField.placeholder} обязательно`,
                        }}
                        render={({ field }) => (
                           <div className="mb-4">
                              <FieldInput
                                 id={inputField.id}
                                 name={inputField.name}
                                 type={inputField.type}
                                 placeholder={inputField.placeholder}
                                 className={`w-full p-3 bg-[#EFF0FA] rounded-xl focus:outline-none ${
                                    errors[inputField.name]
                                       ? 'border-red-500'
                                       : 'border-[#ACACAC]'
                                 }`}
                                 value={field.value || ''}
                                 onChange={(e) => {
                                    const { value } = e.target;
                                    handleInputValue(inputField.name, value);
                                    field.onChange(value);
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
                           </div>
                        )}
                     />
                  ))}

                  <div className="flex justify-end">
                     <button
                        type="submit"
                        className="bg-black px-3 py-2 rounded-xl"
                     >
                        <span className="text-white font-inter text-base font-medium antialiased font-feature-default">
                           Завершить создание
                        </span>
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};
