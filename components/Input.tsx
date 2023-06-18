import { InputHTMLAttributes } from "react";

interface InputProps{

}

const Input = (props: InputHTMLAttributes<HTMLInputElement> & InputProps) => {
    return ( 
        <div className="relative">
            <input
                    className="
                    block rounded-md w-full px-6 pt-6 pb-1 text-md text-paragraph peer
                    appearance-none focus:outline-none focus:ring-0 bg-primary
                    "
                    placeholder=" "
                    id="email"
            />
            <label 
                className="absolute text-md text-paragraph duration-150 transform scale-75
                -translate-y-3 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 
                peer-placeholder-shown:-translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3" 
                htmlFor="email" id="email">
                    Email
            </label>
         </div>
     );
}
 
export default Input;