import { useState } from 'react';

export const useLikes = (initLikes: number, initIsLiked: boolean) => {
    const [isLiked, setIsLiked] = useState(initIsLiked);
    const [likes, setLikes] = useState(initLikes);

    const toggleLike = (liked?: boolean) => {
        if (liked === isLiked) {
            return;
        }
        const curIsLike = liked === undefined ? !isLiked : liked;
        setIsLiked(curIsLike);

        if (curIsLike) {
            setLikes(likes + 1);
            return;
        }
        setLikes(likes - 1);
    };

    return { toggleLike, likes, isLiked };
};
