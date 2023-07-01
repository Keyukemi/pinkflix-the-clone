/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import {BiSolidChevronDown} from "react-icons/bi"
import FavoriteButton from "./FavoriteButton";
import { useRouter } from "next/router";
import useInfoModal from "@/hooks/useInfoModal";

interface MovieCardProps{
    data: Record<string, any>;
}

const MovieCard:React.FC<MovieCardProps> = ({
    data 
}) => {
    const router = useRouter();
    const {openModal} =useInfoModal();

    return ( 
        <div className="group bg-headline col-span relative h-[12vw]">
            <img src={data.thumbnailUrl} alt="Movie Thumbnail" 
            className=" cursor-pointer object-cover transition duration shadow-xl rounded-md 
            group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw] "/>

            <div className="opacity-0 absolute top-0 transition duration-200 z-10 
            invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 
            group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100 ">
                <img className="cursor-pointer object-cover transition duration shadow-xl w-full "
                src={data.thumbnailUrl} alt="Movie Thumbnail" />
                <div className="z-10 absolute bg-paragraph p-2 lg:p-4 w-full transition shadow-md rounded-b-md ">
                    <div className="flex flex-row items-center gap-3 ">
                        <div className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-primary rounded-full
                        flex justify-center items-center transition hover:bg-secondary "
                        onClick={()=>router.push(`/watch/${data?.id}`)}>
                            <BsFillPlayFill className="text-headline" size={30} />
                        </div>
                        <FavoriteButton movieId={data?.id} />
                        <div onClick={()=>openModal(data?.id)}
                        className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10
                        border-2 border-primary hover:border-secondary
                        rounded-full flex justify-center items-center transition">
                            <BiSolidChevronDown className="text-primary group-hover/item:text-secondary" size={25}/>
                        </div>
                    </div>
                    <p className="text-tertiary font-semibold mt-4">
                        New <span className="text-primary">2023</span> 
                    </p>
                    <div className="flex flex-row mt-4 gap-2 items-center ">
                        <p className="text-primary text-[10px]lg:text-sm">{data.duration}</p>
                    </div>
                    <div className="flex flex-row mt-4 gap-2 items-center ">
                        <p className="text-primary text-[10px]lg:text-sm">{data.genre}</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MovieCard;