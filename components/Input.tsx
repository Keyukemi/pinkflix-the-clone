import React,{ InputHTMLAttributes } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps{
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    value: string;
    onChange: any;
    prefix?: () => React.ReactNode;
    //register: UseFormRegister<FieldValues>,
    errors?: FieldErrors
   //disabled?: boolean;
   
}

const Input = (props: InputHTMLAttributes<HTMLInputElement> & InputProps) => {
    return ( 
        <div className="relative">
            {
                props.prefix && (
                    props.prefix()
                )
            }
            <input 
                    {...props}
                    className={`
                    block rounded-md w-full px-6 pt-6 pb-1 text-md text-paragraph peer
                    appearance-none focus:outline-none focus:ring-0 bg-primary
                    ${props.prefix? 'pl-9' : 'pl-4'} 
                    ${props.errors? 'border-rose-500' : 'border-neutral-300'}
                    ${props.errors? 'focus:border-rose-500' : 'focus:border-black'}
                    `}
                    placeholder=" "
            />
            <label 
                className={`absolute text-md text-paragraph duration-150 transform scale-75
                -translate-y-3 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3
                ${props.errors? 'text-rose-500' : 'text-headline'}
                ${props.prefix ? 'left-9' : 'left-4'} 
                `} 
                htmlFor={props.id} id={props.label}>
                    {props.label}
            </label>
         </div>
     );
}
 
export default Input;