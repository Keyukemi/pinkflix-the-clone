import Input from "@/components/Input";
import axios from "axios";
import { useCallback, useState } from "react";
import {signIn, getSession} from 'next-auth/react'
import { useRouter } from "next/router";
import { NextPageContext } from "next";

import {FcGoogle} from 'react-icons/fc'
import {MdEmail, MdPassword} from 'react-icons/md';
import {BsFillPersonFill} from 'react-icons/bs';


export async function getServerSideProps(context:NextPageContext){
    const session = await getSession(context);

    if (session) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        }
      }
    }
  
    return {
      props: {}
    }
}

const Auth = () => {
    const router = useRouter();
    const[email, setEmailValue]= useState("");
    const[name, setNameValue]= useState("");
    const[password, setPasswordValue]= useState("");

    const[variant, setVariant] = useState('login');

    const toggleVariant= useCallback(()=>{
        setVariant((currentVariant) => currentVariant == 'login' ? 'register': 'login')
    }, [])

    const login = useCallback(async()=>{
        try {
            await signIn('credentials',{
                email, 
                password,
                redirect: false,
                callbackUrl:'/'
            });
            router.push('/profiles');
        } catch (error) {
            console.log(error)
        }
    },[email, password, router])

    const register = useCallback(async() => {
        try {
            await axios.post('/api/register',{
                name, email, password
            });
            login();
        } catch (error) {
            console.log(error)
        }
    }, [email, password, name, login]);



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
                           {variant === 'login' ? 'Sign In': 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && ( 
                                <Input
                                    label="Username"
                                    id="username"
                                    type="username"
                                    onChange={(ev: any)=>setNameValue(ev.target.value)}
                                    value={name}
                                    iconprefix={()=> {
                                     return <BsFillPersonFill size={20} className="text-headline absolute top-5 left-2" />
                                    }}
                                />
                            )}

                            <Input
                                label="email"
                                id="email"
                                type="email"
                                onChange={(ev: any)=>setEmailValue(ev.target.value)}
                                value={email}
                                iconprefix={()=>{
                                    return <MdEmail size={20} className="text-headline absolute top-5 left-2" />
                                }}
                            />
                            <Input
                                label="Password"
                                id="password"
                                type="password"
                                onChange={(ev: any)=>setPasswordValue(ev.target.value)}
                                value={password}
                                iconprefix={()=>{
                                    return <MdPassword size={20} className="text-headline absolute top-5 left-2" />
                                }}
                            />
                        </div>

                        <button onClick={variant === 'login' ? login: register}
                        className="bg-headline text-primary hover:bg-paragraph rounded-md mt-10 w-full py-3 transition">
                           {variant === 'login' ? 'Log in' :'Create Account'}
                        </button>
                        
                        <div className="flex flex-row gap-4 items-center mt-8 justify-center">
                            <div onClick={()=>signIn('google', {callbackUrl: '/profiles'})}
                            className="h-10 w-10 bg-primary rounded-full flex items-center
                             justify-center cursor-pointer hover:opacity-80 transition">
                                <FcGoogle size={30}/>
                            </div>
                        </div>

                        <p className="text-paragraph mt-4 text-center">
                        {variant === 'login' ? 'New to PinkFlix?': 'Already have an account?'}
                            <span onClick={toggleVariant}
                            className="text-primary ml-1 hover:underline cursor-pointer">
                                {variant === 'login' ? 'Create an account': 'Sign In here'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Auth;