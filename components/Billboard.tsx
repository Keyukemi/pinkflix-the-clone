import useBillboard from "@/hooks/useBillboard";
import React, { useCallback } from "react";
import { BsInfoCircle } from "react-icons/bs";
import PlayButton from "./PlayButton";
import useInfoModal from "@/hooks/useInfoModal";

const Billboard = () => {
    const {data} = useBillboard();
    const {openModal} = useInfoModal();

    const handleOpenModal = useCallback(()=>{
        openModal(data?.id);
    },[openModal, data?.id])
    return ( 
            <div className="relative h-[56.25vw]">
                <video className="w-full h-[56.25vw] object-cover brightness-[60%]"
                autoPlay muted loop src={data?.videoUrl} poster={data?.thumbnailUrl}></video>
                <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                    <p className="text-primary text-1xl md:text-5xl h-full w-[50%]
                    font-bold lg:text-6xl drop-shadow-xl">
                        {data?.title}
                    </p>
                    <p className="text-primary text-[8px] md:text-lg mt-3 md:mt-8  
                    w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                        {data?.description}
                    </p>
                    <div className="flex flex-row items-center mt-3 md:mt-4 gap-3 ">
                        <PlayButton movieId={data?.id}/>
                        <button onClick={handleOpenModal}
                        className="bg-highlight rounded-md text-primary 
                        py-1 md:py-2 px-2 md:px-3 bg-opacity-70 w-auto text-sm lg:text-lg 
                        font-semibold flex flex-row items-center hover:bg-opacity-30 transition">
                            <BsInfoCircle
                            className="mr-1 text-tertiary"/>
                            More Info
                        </button>
                    </div>
                </div>
            </div>
     );
}
 
export default Billboard;