import React from "react";

interface MobileNavMenuProps{
    visible?: boolean;

}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
    visible
}) => {
   if (!visible){
    return null
   }
   return(
    <div className="w-56 bg-paragraph absolute top-8 left-0 py-5 flex-col
    border-2 border-secondary flex ">
        <div className="flex flex-col gap-4">
            <div className="px-3 text-center text-primary hover:underline ">
                Home
            </div>
            <div className="px-3 text-center text-primary hover:underline ">
                Series
            </div>
            <div className="px-3 text-center text-primary hover:underline ">
                Movies
            </div>
            <div className="px-3 text-center text-primary hover:underline ">
                New & Popular
            </div>
            <div className="px-3 text-center text-primary hover:underline ">
                My List
            </div>
            <div className="px-3 text-center text-primary hover:underline ">
                Browse by languages
            </div>
        </div>
    </div>
   )
}
 
export default MobileNavMenu;