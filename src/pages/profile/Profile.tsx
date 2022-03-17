import { ReactElement, useContext, useEffect, useState } from 'react';
import { HeaderContext } from '../../contexts/HeaderContext';
import styles from './Profile.module.scss';
import cn from 'classnames';
import { Gallery } from '../../components/gallery/Gallery';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export const Profile = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    const { author } = useContext(AuthContext);
    const [isSubscribed, setIsSubscribed] = useState(author?.isSubscribed);
    const [subscribers, setSubscribers] = useState(199);
    useEffect(() => {
        setHeader(
            'vanika_koma',
            <div>
                <Link to="/profile/vanika_koma/edit">
                    <i className="fas fa-edit"></i>
                </Link>
            </div>,
        );
    }, []);

    const toggleSubscribe = () => {
        setIsSubscribed(!isSubscribed);
        if (!isSubscribed) {
            setSubscribers(subscribers + 1);
            return;
        }
        setSubscribers(subscribers - 1);
    };

    return (
        <>
            {author && (
                <div className={styles.profile}>
                    <div className={styles.profile__header}>
                        <div
                            className={styles.profile__ava}
                            style={{ backgroundImage: `url(${author.img})` }}
                        ></div>
                        <div className={styles.profile__stats}>
                            <div className={cn(styles.profile__stat, styles.stat)}>
                                <div className={styles.stat__value}>{author.postsCount}</div>
                                <div className={styles.stat__label}>Публикации</div>
                            </div>
                            <div className={cn(styles.profile__stat, styles.stat)}>
                                <div className={styles.stat__value}>{author.subscribersCount}</div>
                                <div className={styles.stat__label}>Подписчики</div>
                            </div>
                            <div className={cn(styles.profile__stat, styles.stat)}>
                                <div className={styles.stat__value}>
                                    {author.subscriptionsCount}
                                </div>
                                <div className={styles.stat__label}>Подписки</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div className={styles.profile__name}>{author.name}</div>
                        <div className={styles.profile__description}>{author.description}</div>
                        <a href={author.link} className={styles.profile__link}>
                            {author.link}
                        </a>
                        {!author.isMe && (
                            <button
                                className={cn(styles.profile__btn, {
                                    [styles.profile__btn_secondary]: isSubscribed,
                                })}
                                onClick={() => toggleSubscribe()}
                            >
                                {isSubscribed ? 'Отписаться' : 'Подписаться'}
                            </button>
                        )}
                    </div>

                    <Gallery posts={author.posts} />
                </div>
            )}
        </>
    );
};
