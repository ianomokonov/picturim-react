import { useState } from 'react';

export const useLikes = (initLikes: number, initIsLiked: boolean) => {
    const [isLiked, setIsLiked] = useState(initIsLiked);
    const [likes, setLikes] = useState(initLikes);

    const toggleLike = (liked?: boolean): boolean => {
        if (liked === isLiked) {
            return isLiked;
        }
        const curIsLike = liked === undefined ? !isLiked : liked;
        setIsLiked(curIsLike);

        if (curIsLike) {
            setLikes(likes + 1);
            return curIsLike;
        }
        setLikes(likes - 1);
        return curIsLike;
    };

    return { toggleLike, likes, isLiked };
};
