import React from "react";

interface NavbarItemProps{
    label: string;

}


const NavbarItem: React.FC<NavbarItemProps> = (
    {label}
) => {
    return (
        <div className="text-highlight cursor-pointer hover:text-secondary transition">
            {label}
        </div>
     );
}
 
export default NavbarItem;