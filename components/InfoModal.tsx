import React,{ useCallback, useEffect, useState} from "react";
import {AiOutlineClose} from 'react-icons/ai'
import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";
import useInfoModal from "@/hooks/useInfoModal";
import useMovie from "@/hooks/useMovie";
import { BiSolidCategoryAlt, BiSolidHot, BiSolidTimeFive } from "react-icons/bi";

interface InfoModalProps{
    visible?: boolean;
    onClose: any;
}

const InfoModal: React.FC <InfoModalProps> = ({visible, onClose}) => {
    const [isVisible, setIsVisible] = useState(!!visible);
    const {movieId} = useInfoModal();
    const {data ={}} = useMovie(movieId);

    useEffect (()=> {
        setIsVisible(!!visible);
    },[visible]);

    const handleClose = useCallback (()=>{
        setIsVisible(false)
        setTimeout(() => {
            onClose();
        }, 300);
    },[onClose])

    if(!visible){
        return null
    }
    return ( 
        <div className="z-50 transition duration-300 bg-headline opacity-95 flex
        justify-center items-center fixed inset-0 overflow-x-hidden overflow-y-auto ">
            <div className="relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden">
                <div className={`${isVisible? 'scale-100': 'scale-0'} transform duration-300 relative
                flex-auto bg-highlight drop-shadow-md `}>
                    <div className="h-96 relative">
                        <video autoPlay muted loop
                            className="w-full h-full brightness-[60%] object-cover"
                            src={data?.videoUrl} poster={data?.thumbnailUrl}>
                        </video>
                        <div onClick={handleClose}
                        className="cursor-pointer rounded-full h-10 w-10 absolute top-3 right-3
                        bg-headline flex items-center justify-center">
                            <AiOutlineClose className="text-primary" size={20}/>
                        </div>
                        <div className="absolute bottom-[10%] left-10 ">
                            <p className="text-primary mb-8 font-bold text-3xl md:text-4xl h-full lg:text-5xl">
                                {data?.title}
                            </p>
                            <div className="flex flex-row gap-4 items-center">
                                <PlayButton movieId={data?.id}/>
                                <FavoriteButton movieId={data?.id}/>
                            </div>
                        </div>
                    </div>
                    <div className="px-12 py-8">
                        <p className="text-tertiary font-semibold text-lg flex flex-row items-center">
                            <BiSolidHot/>
                            New
                        </p>
                        <p className="text-primary text-lg flex flex-row items-center">
                        <BiSolidTimeFive/>
                            {data?.duration}
                        </p>
                            
                        <p className="text-primary text-lg flex flex-row items-center">
                            <BiSolidCategoryAlt/>
                            {data?.genre}
                        </p>
                        <p className="text-headline text-lg">

                            {data?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default InfoModal;