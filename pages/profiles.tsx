import useCurrentUser from "@/hooks/useCurrentUser";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

export async function getServerSideProps(context:NextPageContext) {
    const session = await getSession(context);
    if(!session){
        return{
            redirect:{
                destination: '/auth',
                permanent: false
            }
        }
    }
    return{
        props:{}
    }
}


const Profiles = () => {
    const router = useRouter();
    const {data: user } = useCurrentUser();

    return ( 
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-primary text-center">Who is watching?</h1>
                <div className="flex items-center gap-8 justify-center mt-10">
                    <div onClick={()=>router.push('/')}
                    className="group w-44 flex-row mx-auto ">
                        <div className="w-44 h-44 rounded-full flex items-center justify-center overflow-hidden
                        border-2 border-transparent group-hover:cursor-pointer  group-hover:border-primary ">
                            <img src="/images/punkicon1.png" alt="Profile Image 1" className="bg-primary" />
                        </div>
                        <div className=" mt-4 text-highlight text-2xl text-center group-hover:text-secondary ">
                            {user?.name}
                        </div>
                    </div>
                    {/* User 2 */}
                    <div onClick={()=>{}}
                    className="group w-44 flex-row mx-auto ">
                        <div className="w-44 h-44 rounded-full flex items-center justify-center overflow-hidden
                        border-2 border-transparent group-hover:cursor-pointer  group-hover:border-primary ">
                            <img src="/images/punkicon2.png" alt="Profile Image 1" className="bg-highlight" />
                        </div>
                        <div className=" mt-4 text-highlight text-2xl text-center group-hover:text-secondary ">
                            User
                        </div>
                    </div>
                    {/* user 3 */}
                    <div onClick={()=>{}}
                    className="group w-44 flex-row mx-auto ">
                        <div className="w-44 h-44 rounded-full flex items-center justify-center overflow-hidden
                        border-2 border-transparent group-hover:cursor-pointer  group-hover:border-primary ">
                            <img src="/images/punkicon3.png" alt="Profile Image 1" className="bg-secondary" />
                        </div>
                        <div className=" mt-4 text-highlight text-2xl text-center group-hover:text-secondary ">
                            User
                        </div>
                    </div>
                    {/* Kids */}
                    <div onClick={()=>{}}
                    className="group w-44 flex-row mx-auto ">
                        <div className="w-44 h-44 rounded-full flex items-center justify-center overflow-hidden
                        border-2 border-transparent group-hover:cursor-pointer  group-hover:border-primary ">
                            <img src="/images/punkicon4.png" alt="Profile Image 1" className="bg-tertiary" />
                        </div>
                        <div className=" mt-4 text-tertiary text-2xl text-center group-hover:text-primary ">
                            Kids
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Profiles;