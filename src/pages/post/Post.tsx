import { ReactElement, useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../../components/post/Post';
import { HeaderContext } from '../../contexts/HeaderContext';
import { PostDto } from '../../services/dto/post.dto';
import { PostService } from '../../services/post.service';
import styles from './Post.module.scss';

export const PostPage = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    const [post, setPost] = useState<PostDto | null>(null);
    const { id: postId } = useParams();
    const postService = useMemo(() => new PostService(), []);
    useEffect(() => {
        setHeader('Публикация', <div>{/* <i className="fas fa-share"></i> */}</div>);
    }, []);

    useEffect(() => {
        if (!postId) {
            return;
        }
        postService.getPost(postId).then((post) => setPost(post));
    }, [postService, postId]);

    const toogleLike = async (postId: string) => {
        await postService.like(postId);
    };

    return <>{post && <Post onToogleLike={toogleLike} post={post} />}</>;
};
