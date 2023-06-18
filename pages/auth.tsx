import Input from "@/components/Input";

const Auth = () => {
    return ( 
        <div className="h-full w-full relative bg-[url('/images/hero.jpg')]
            bg-no-repeat bg-center bg-fixed bg-cover ">
            <div className="bg-black w-full h-full lg:bg-opacity-80">
                <nav className="px-12 py-5">
                    <img src="/images/PinkFlix(c).png" alt="PinkFlix Logo" className="h-24" />
                </nav>
                <div className="flex justify-center ">
                    <div className="bg-highlight px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md
                        rounded-md w-full ">
                        <h2 className="text-headline text-4xl mb-8 font-semibold">Sign in</h2>
                        <div className="flex flex-col gap-4">
                            <Input/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Auth;