import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface InputProps
   extends DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement,
   > {
   id: string;
   name: string;
   placeholder: string;
   type: string;
   onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
   onBlur?: () => void;
   required?: boolean;
   value?: string;
   className: string;
}

export const FieldInput: FC<InputProps> = (props) => {
   const {
      id,
      name,
      onChange,
      placeholder,
      type,
      onBlur,
      required,
      value,
      className,
   } = props;
   return (
      <div>
         <input
            id={id}
            name={name}
            type={type}
            value={value || ''}
            placeholder={placeholder}
            required={required || false}
            onChange={onChange}
            onBlur={onBlur}
            className={className}
         />
      </div>
   );
};
