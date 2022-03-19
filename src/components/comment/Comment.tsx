import { ReactElement, useCallback, useState } from 'react';
import styles from './Comment.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useLikes } from '../../hooks/useLikes';

export const Comment = ({
    className,
    onAnswer,
}: {
    className?: string;
    onAnswer?: (login: string) => void;
}): ReactElement => {
    const { isLiked, likes, toggleLike } = useLikes(124, false);

    return (
        <div className={cn(styles.comment, className)}>
            <div className={cn(styles['comment__author-photo'])}>
                <div style={{ backgroundImage: 'url(../assets/ava.jpg)' }}></div>
            </div>
            <div className={styles.comment__content}>
                <span className={styles['comment__author-name']}>vanika_koma</span>
                <span className={styles.comment__text}>Комментарии</span>
                <div className={styles.comment__stats}>
                    <small className={styles['comment__create-duration']}>1д. назад</small>
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
                    onClick={() => toggleLike()}
                ></i>
            </div>
        </div>
    );
};
