import { ReactElement, useContext, useEffect, useMemo, useState } from 'react';
import { Post } from '../../components/post/Post';
import { HeaderContext } from '../../contexts/HeaderContext';
import { PostDto } from '../../services/dto/post.dto';
import { PostService } from '../../services/post.service';
import styles from './Main.module.scss';

export const Main = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    const postService = useMemo(() => new PostService(), []);
    const [posts, setPosts] = useState<PostDto[]>([]);

    useEffect(() => {
        setHeader();
    }, []);
    useEffect(() => {
        postService.getPosts().then((p) => {
            console.log(p);

            setPosts(p);
        });
    }, [postService]);
    return (
        <div className={styles['photo-list']}>
            {posts.map((p) => (
                <Post key={p._id} post={p} className={styles['photo-list__item']} />
            ))}
        </div>
    );
};
