/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ReactElement, useCallback, useState } from 'react';
import styles from './Comment.module.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useLikes } from '../../hooks/useLikes';

export const Comment = ({
    isFirst,
    className,
    hasMoreComments,
}: {
    isFirst?: boolean;
    className?: string;
    hasMoreComments?: boolean;
}): ReactElement => {
    const initText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima illo
    soluta atque magnam veniam quibusdam adipisci ipsa a, sed, quo optio veritatis
    officia recusandae iure? Corrupti, voluptatum porro distinctio dolores placeat
    facere eos doloribus, dignissimos unde delectus eius iusto reprehenderit
    exercitationem obcaecati quam perspiciatis? Assumenda provident at illo fugiat
    officiis ea eveniet odio rerum, facere dignissimos suscipit repellat deserunt
    nihil. Officiis repudiandae vitae officia, odio, illum qui sint similique, culpa
    sapiente quaerat a cupiditate vero accusantium nobis optio earum quisquam?
    Corrupti, rem, laudantium inventore sapiente sed aliquid maiores numquam libero
    est iste doloremque ut amet repellat obcaecati deserunt enim repellendus
    pariatur dicta sequi dolores molestias error et. Hic labore libero, consectetur
    dolorum ducimus ullam aperiam aut ipsum explicabo amet fugit nihil dolorem a
    officia nostrum perferendis optio assumenda minus! Maiores, consequatur laborum.
    Rem aliquid odio deserunt, iusto ipsum iure neque porro autem fugiat cum soluta,
    ea excepturi fuga tenetur hic officiis assumenda. Ex tempora fugiat nesciunt
    incidunt! Quidem eveniet sit, unde nihil minima fuga amet odio praesentium
    blanditiis alias nam ea porro placeat velit eligendi eum quis. Similique saepe
    voluptatem exercitationem adipisci, natus deserunt pariatur repellat neque vel,
    alias recusandae reprehenderit earum repellendus iste enim nobis explicabo!
    Laudantium, repellat.`;
    const [cutText, setCutText] = useState(isFirst);
    const { isLiked, likes, toggleLike } = useLikes(124, false);

    const getText = useCallback(() => {
        if (cutText) {
            return initText.slice(0, 200).replace(/[.,\s]+$/, '');
        }
        return initText;
    }, [cutText, initText]);

    return (
        <div
            className={cn(
                styles.comment,
                {
                    [styles.comment_first]: isFirst,
                },
                className,
            )}
        >
            <div className={cn(styles['comment__author-photo'])}>
                <div style={{ backgroundImage: 'url(../assets/ava.jpg)' }}></div>
            </div>
            <div className={styles.comment__content}>
                <span className={styles['comment__author-name']}>vanika_koma</span>
                <span className={styles.comment__text}>{getText()}</span>
                {isFirst && (
                    <small
                        className={cn(styles.comment__more)}
                        onClick={() => setCutText(!cutText)}
                    >
                        {cutText ? 'ещё' : 'скрыть'}
                    </small>
                )}
                <Link
                    to="/comments"
                    className={cn(styles['comment__show-all'], {
                        'd-none': !hasMoreComments,
                    })}
                >
                    Посмотреть все комментарии
                </Link>
                <div className={styles.comment__stats}>
                    <small className={styles['comment__create-duration']}>1д. назад</small>
                    <small className={styles.comment__likes}>Нравится: {likes}</small>
                    <small className={styles.comment__replay}>Ответить</small>
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
