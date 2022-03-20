import { ReactElement, useCallback, useMemo, useState } from 'react';
import styles from './Comment.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useLikes } from '../../hooks/useLikes';
import { CommentDto } from '../../_services/dto/comment.dto';
import { getCreateDuration } from '../../utils/get-create-duration';
import { CommentService } from '../../_services/comment.service';

export const Comment = ({
    comment,
    className,
    onAnswer,
}: {
    comment: CommentDto;
    className?: string;
    onAnswer?: (login: string) => void;
}): ReactElement => {
    const { isLiked, likes, toggleLike } = useLikes(comment.likesCount, comment.isLiked);
    const commentService = useMemo(() => new CommentService(), []);

    const setNewLike = (like?: boolean): void => {
        if (like === isLiked) {
            return;
        }
        toggleLike();
        commentService.like(comment._id);
    };

    return (
        <div className={cn(styles.comment, className)}>
            <div className={cn(styles['comment__author-photo'])}>
                <Link to={`/profile/${comment.author.login}`}>
                    <div style={{ backgroundImage: `url(${comment.author.img})` }}></div>
                </Link>
            </div>
            <div className={styles.comment__content}>
                <Link
                    className={styles['comment__author-name']}
                    to={`/profile/${comment.author.login}`}
                >
                    {comment.author.login}
                </Link>
                <span className={styles.comment__text}>{comment.text}</span>
                <div className={styles.comment__stats}>
                    <small className={styles['comment__create-duration']}>
                        {getCreateDuration(comment.createdAt)}
                    </small>
                    <small className={styles.comment__likes}>Нравится: {likes}</small>
                    <small
                        className={styles.comment__replay}
                        onClick={() => onAnswer && onAnswer('vanika_koma')}
                    >
                        Ответить
                    </small>
                </div>
            </div>
            <div className={cn(styles.comment__actions)}>
                <i
                    className={cn({ far: !isLiked, fas: isLiked }, 'fa-heart')}
                    onClick={() => setNewLike()}
                ></i>
            </div>
        </div>
    );
};
