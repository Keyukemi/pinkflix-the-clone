import { useCallback, useEffect, useState } from "react";
import MobileNavMenu from "./MobileNavMenu";
import NavbarItem from "./NavbarItem";
import {BiSolidChevronDown} from 'react-icons/bi'
import { BsBell, BsSearch } from "react-icons/bs";
import AccountMenu from "./AccountMenu";

const TOP_OFFSET = 66;

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu]= useState(false);
    const [showAccountMenu, setShowAccountMenu]= useState(false);
    const [showBackground, setShowBackground]= useState(false);

    useEffect(()=> {
        const handleScroll = () =>{
            if (window.scrollY >= TOP_OFFSET){
                setShowBackground(true);
            }else{
                setShowBackground(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
        return ()=>{
            window.removeEventListener('scroll', handleScroll)
        }
    },[]);

    const toggleMobileMenu = useCallback(()=> {
        setShowMobileMenu((current)=> !current);
    },[]);

    const toggleAccountMenu = useCallback(()=> {
        setShowAccountMenu((current)=> !current);
    },[])
    return ( 
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-16 py-4 flex flex-row items-center transition 
            duration-500 ${showBackground? 'bg-headline bg-opacity-90' : ''} `}>
                <img src="/images/PinkFlix(c).png" alt="PinkFlix Logo" className="h-8 lg:h-14" />
                <div className="ml-8 flex-row hidden lg:flex gap-7">
                    <NavbarItem label="Home"/>
                    <NavbarItem label="Series"/>
                    <NavbarItem label="Movies"/>
                    <NavbarItem label="New & Popular"/>
                    <NavbarItem label="My list"/>
                    <NavbarItem label="Browse by languages"/>
                </div>
                <div onClick={toggleMobileMenu}
                className="lg:hidden flex flex-row gap-2 ml-8 items-center cursor-pointer relative ">
                    <p className="text-highlight text-sm">Browse</p>
                    <BiSolidChevronDown  className={`text-highlight transition ${showMobileMenu? 'rotate-180' : 'rotate-0' } `}/>
                    <MobileNavMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-highlight hover:text-secondary cursor-pointer transition">
                        <BsSearch/>
                    </div>
                    <div className="text-highlight hover:text-secondary cursor-pointer transition">
                        <BsBell/>
                    </div>
                    <div onClick={toggleAccountMenu}
                    className=" flex flex-row gap-2 cursor-pointer relative items-center">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src="/images/punkicon1.png" alt="Profile Image 1" className="border-2 border-secondary" />
                        </div>
                        <BiSolidChevronDown className={`text-secondary transition ${showAccountMenu? 'rotate-180' : 'rotate-0' } `}/>
                        <AccountMenu visible={showAccountMenu}/>
                    </div>
                </div>
            </div>
        </nav>
     );
}
  
export default Navbar;