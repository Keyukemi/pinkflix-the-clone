import React from "react";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

interface AccountMenuProps{
    visible?:boolean;
}

const AccountMenu: React.FC <AccountMenuProps> = ({
    visible
}) => {
    const {data} = useCurrentUser();

    if(!visible){
        return null;
    }
    return ( 
        <div className="bg-paragraph absolute py-4 w-56 top-14 right-0 
        flex flex-col border-2 border-secondary rounded-md">
            <div className="flex flex-col gap-3">
                <div className="group/item px-3 flex flex-row items-center w-full ">
                    <img src="/images/punkicon1.png" alt="Profile Image 1" className="w-8 rounded-md bg-primary" />
                    <p className=" text-primary text-sm group-hover/item:underline m-2">{data?.name}</p>
                </div>
                <hr className="bg-secondary border-0 h-px my-3 m-3"/>
                <div onClick={()=>signOut()}
                className="text-sm hover:underline text-primary text-center px-3 font-semibold ">
                    Enough binging, Signout!
                </div>
            </div>
        </div>  
     );
}
 
export default AccountMenu;