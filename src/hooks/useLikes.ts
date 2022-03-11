import { useState } from 'react';

export const useLikes = (initLikes: number, initIsLiked: boolean) => {
    const [isLiked, setIsLiked] = useState(initIsLiked);
    const [likes, setLikes] = useState(initLikes);

    const toggleLike = () => {
        setIsLiked(!isLiked);

        if (!isLiked) {
            setLikes(likes + 1);
            return;
        }
        setLikes(likes - 1);
    };

    return { toggleLike, likes, isLiked };
};
