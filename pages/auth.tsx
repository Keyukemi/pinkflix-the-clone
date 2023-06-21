import Input from "@/components/Input";
import Image from "next/image";
import { useCallback, useState } from "react";
import MdEmail from 'react-icons/md'

const Auth = () => {
    const[emailValue, setEmailValue]= useState("");
    const[usernameValue, setUsernameValue]= useState("");
    const[passwordValue, setPasswordValue]= useState("");

    const[variant, setVariant] = useState('login');

    const toggleVariant= useCallback(()=>{
        setVariant((currentVariant) => currentVariant == 'login' ? 'register': 'login')
    }, [])

    return ( 
        <div className="h-full w-full relative bg-[url('/images/hero.jpg')]
            bg-no-repeat bg-center bg-fixed bg-cover ">
            <div className="bg-headline w-full h-full lg:bg-opacity-80">
                <nav className="px-12 py-5">
                    <img src="/images/PinkFlix(c).png" alt="PinkFlix Logo" className="h-24" />
                </nav>
                <div className="flex justify-center ">
                    <div className="bg-highlight px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md
                        rounded-md w-full ">
                        <h2 className="text-headline text-4xl mb-8 font-semibold">
                           {variant == 'login' ? 'Sign In': 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant == 'register' && ( 
                                <Input
                                    label="Username"
                                    id="username"
                                    type="username"
                                    onChange={(ev: any)=>setUsernameValue(ev.target.value)}
                                    value={usernameValue}
                                    // prefix={()=>{
                                    //     return <MdEmail size={20} className="text-headline absolute top-5 left-2" />
                                    // }}
                                />
                            )}

                            <Input
                                label="Email"
                                id="email"
                                type="email"
                                onChange={(ev: any)=>setEmailValue(ev.target.value)}
                                value={emailValue}
                                // prefix={()=>{
                                //     return <MdEmail size={20} className="text-headline absolute top-5 left-2" />
                                // }}
                            />
                            <Input
                                label="Password"
                                id="password"
                                type="password"
                                onChange={(ev: any)=>setPasswordValue(ev.target.value)}
                                value={passwordValue}
                                // prefix={()=>{
                                //     return <MdEmail size={20} className="text-headline absolute top-5 left-2" />
                                // }}
                            />
                        </div>

                        <button className="bg-headline text-primary hover:bg-paragraph rounded-md mt-10 w-full py-3 transition">
                           {variant == 'register' ? 'Create Account': 'Log in'}
                        </button>
                        <p className="text-paragraph mt-12 text-center">
                        {variant == 'login' ? 'New to PinkFlix?': 'Already have an account?'}
                            <span onClick={toggleVariant}
                            className="text-primary ml-1 hover:underline cursor-pointer">
                                {variant == 'login' ? 'Create an account': 'Sign In here'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Auth;