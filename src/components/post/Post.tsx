/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ReactElement, useState } from 'react';
import styles from './Post.module.scss';
import cn from 'classnames';
import { PostProps } from './Post.props';
import { Comment } from '../comment/Comment';
import { useLikes } from '../../hooks/useLikes';
import { AuthorMiniCard } from '../author-mini-card/AuthorMiniCard';

export const Post = ({ post, className, ...props }: PostProps): ReactElement => {
    const { isLiked, likes, toggleLike } = useLikes(post.likesCount, post.isLiked);
    const [imgNotFound, setImgNotFound] = useState(false);

    return (
        <>
            {post && (
                <div className={cn(styles.photo, className)} {...props}>
                    <div className={styles.photo__header}>
                        <AuthorMiniCard author={post.author} className={styles.photo__author} />

                        <div className={styles.photo__menu}>
                            {/* <i className="fas fa-ellipsis-v"></i> */}
                        </div>
                    </div>
                    <img
                        className={cn(styles.photo__content, {
                            [styles['photo__content_not-found']]: imgNotFound,
                        })}
                        src={post.img}
                        onError={() => setImgNotFound(true)}
                        alt=""
                        onDoubleClick={() => toggleLike(true)}
                    />
                    <div className={styles.photo__body}>
                        <div className={styles.photo__actions}>
                            <i
                                className={cn({ far: !isLiked, fas: isLiked }, 'fa-heart')}
                                onClick={() => toggleLike()}
                            ></i>
                            {/* <i className="fas fa-share"></i> */}
                        </div>
                        <div className={styles.photo__likes}>Нравится: {likes}</div>
                        <div className={styles.photo__comments}>
                            <Comment isFirst hasMoreComments />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
