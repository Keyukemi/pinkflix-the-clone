import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

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


const profiles = () => {
    return ( 
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-primary text-center">Who is watching?</h1>
                <div className="flex items-center gap-8 justify-center mt-10">
                    <div onClick={()=>{}}>

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default profiles;