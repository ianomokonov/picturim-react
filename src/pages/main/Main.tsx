import { ReactElement, useContext, useEffect, useMemo, useState } from 'react';
import { Post } from '../../components/post/Post';
import { HeaderContext } from '../../_contexts/HeaderContext';
import { PostDto } from '../../_services/dto/post.dto';
import { PostService } from '../../_services/post.service';
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
            setPosts(p);
        });
    }, [postService]);

    const toogleLike = async (postId: string) => {
        await postService.like(postId);
    };
    return (
        <div className={styles['photo-list']}>
            {posts.map((p) => (
                <Post
                    onToogleLike={toogleLike}
                    key={p._id}
                    post={p}
                    className={styles['photo-list__item']}
                />
            ))}
        </div>
    );
};
