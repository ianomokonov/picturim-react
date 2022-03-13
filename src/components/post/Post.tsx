/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { ReactElement } from 'react';
import styles from './Post.module.scss';
import cn from 'classnames';
import { PostProps } from './Post.props';
import { Comment } from '../comment/Comment';
import { useLikes } from '../../hooks/useLikes';

export const Post = ({ className, ...props }: PostProps): ReactElement => {
    const { isLiked, likes, toggleLike } = useLikes(1200, false);
    return (
        <div className={cn(styles.photo, className)} {...props}>
            <div className={styles.photo__header}>
                <div className={cn(styles.photo__author, styles.author)}>
                    <img className={styles.author__ava} src="/assets/ava.jpg" alt="" />
                    <span className={styles.author__name}>vanika_koma</span>
                </div>

                <div className={styles.photo__menu}>
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <img
                className={styles.photo__content}
                src="/assets/photo.jpg"
                alt=""
                onDoubleClick={() => toggleLike(true)}
            />
            <div className={styles.photo__body}>
                <div className={styles.photo__actions}>
                    <i
                        className={cn({ far: !isLiked, fas: isLiked }, 'fa-heart')}
                        onClick={() => toggleLike()}
                    ></i>
                    <i className="fas fa-share"></i>
                </div>
                <div className={styles.photo__likes}>Нравится: {likes}</div>
                <div className={styles.photo__comments}>
                    <Comment isFirst hasMoreComments />
                </div>
            </div>
        </div>
    );
};
