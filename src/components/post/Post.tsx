/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ReactElement, useCallback, useEffect, useState } from 'react';
import styles from './Post.module.scss';
import cn from 'classnames';
import { PostProps } from './Post.props';
import { useLikes } from '../../hooks/useLikes';
import { AuthorMiniCard } from '../author-mini-card/AuthorMiniCard';
import { Link } from 'react-router-dom';
import { getCreateDuration } from '../../utils/get-create-duration';

export const Post = ({ post, className, onToogleLike, ...props }: PostProps): ReactElement => {
    const { isLiked, likes, toggleLike } = useLikes(post.likesCount, post.isLiked);
    const [imgNotFound, setImgNotFound] = useState(false);
    const [cutText, setCutText] = useState(true);

    const getText = useCallback(() => {
        if (cutText) {
            return post.description?.slice(0, 200).replace(/[.,\s]+$/, '');
        }
        return post.description;
    }, [cutText, post.description]);

    const setNewLike = (like?: boolean): void => {
        if (like === isLiked) {
            return;
        }
        toggleLike();
        onToogleLike(post._id);
    };

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
                        onDoubleClick={() => setNewLike(true)}
                    />
                    <div className={styles.photo__body}>
                        <div className={styles.photo__actions}>
                            <i
                                className={cn({ far: !isLiked, fas: isLiked }, 'fa-heart')}
                                onClick={() => setNewLike()}
                            ></i>
                            <Link to={`/post/${post._id}/comments`}>
                                <i className="far fa-comment"></i>
                            </Link>
                            {/* <i className="fas fa-share"></i> */}
                        </div>
                        <div className={styles.photo__likes}>Нравится: {likes}</div>
                        <div className={styles.photo__description}>
                            <span className={styles['photo__author-name']}>
                                {post.author.login}
                            </span>
                            <span className={styles['photo__description-text']}>{getText()}</span>

                            {post.description?.length > 200 && (
                                <small
                                    className={cn(styles.photo__more)}
                                    onClick={() => setCutText(!cutText)}
                                >
                                    {cutText ? 'ещё' : 'скрыть'}
                                </small>
                            )}
                            <Link
                                to={`/post/${post._id}/comments`}
                                className={cn(styles['photo__show-all'], {
                                    'd-none': !post.commentsCount,
                                })}
                            >
                                Посмотреть все комментарии
                            </Link>
                            <div className={styles.photo__stats}>
                                <small className={styles['photo__create-duration']}>
                                    {getCreateDuration(new Date(post.createdAt))}
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
