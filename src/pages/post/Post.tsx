import { ReactElement, useContext, useEffect } from 'react';
import { Post } from '../../components/post/Post';
import { HeaderContext } from '../../contexts/HeaderContext';
import styles from './Post.module.scss';

export const PostPage = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    useEffect(() => {
        setHeader(
            'Публикация',
            <div>
                <i className="fas fa-share"></i>
            </div>,
        );
    }, []);

    return <Post />;
};
