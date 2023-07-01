import axios from "axios";
import React, {useCallback, useMemo} from "react";
import useCurrentUser from "@/hooks/useCurrentUser";
import useFavorites from "@/hooks/useFavorites";
import { BsFillHeartFill, BsHeart } from "react-icons/bs";

interface FavoriteButtonProps{
    movieId: string;  
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({movieId}) => {
    const {mutate: mutateFavorites} = useFavorites();
    const {data: currentUser, mutate} = useCurrentUser();

    const isFavorite = useMemo (()=>{
        const list = currentUser?.favoriteIds || [];
        return list.includes(movieId)
    }, [currentUser, movieId]);

    const toggleFavorites = useCallback(async () => {
        let response;

        if (isFavorite){
            response = await axios.delete('/api/favorite',{data:{movieId}});
        } else{
            response = await axios.post('/api/favorite',{movieId});
        }
        const updatedFavoriteIds = response?.data?.favoriteIds;
        
        mutate({
            ...currentUser,
            favoriteIds: updatedFavoriteIds
        });
        mutateFavorites();
    },[movieId, isFavorite, currentUser, mutate, mutateFavorites])

    const Icon = isFavorite? BsFillHeartFill : BsHeart;

    return ( 
        <div onClick={toggleFavorites}
        className="flex cursor-pointer w-6 h-6 lg:w-10 lg:h-10 border-2 border-primary rounded-full
        justify-center items-center transition group/item hover:border-secondary p-1 ">
            <Icon className={`${isFavorite?'text-highlight ': 'text-primary'}`} size={20} />
        </div>
     );
}
 

export default FavoriteButton;
