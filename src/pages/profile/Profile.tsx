import { ReactElement, useContext, useEffect, useMemo, useState } from 'react';
import { HeaderContext } from '../../contexts/HeaderContext';
import styles from './Profile.module.scss';
import cn from 'classnames';
import { Gallery } from '../../components/gallery/Gallery';
import { Link, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { AuthorService } from '../../services/author.service';
import { AuthorDto } from '../../services/dto/author.dto';

export const Profile = (): ReactElement => {
    const authService = useMemo(() => new AuthorService(), []);
    const { login } = useParams();
    const { setHeader } = useContext(HeaderContext);
    const { author: me, logout } = useContext(AuthContext);
    const [author, setAuthor] = useState<AuthorDto | null | undefined>(null);

    useEffect(() => {
        if (login) {
            authService.getAuthorInfo(login).then((auth) => {
                setAuthor(auth);
                setHeader(
                    auth.login,
                    <div>
                        <Link to={`/profile/${auth.login}/edit`}>
                            <i className="fas fa-edit"></i>
                        </Link>
                    </div>,
                );
            });
            return;
        }

        setHeader(
            me?.login,
            <div>
                <Link to={`/profile/${author?.login}/edit`}>
                    <i className="fas fa-edit"></i>
                </Link>
            </div>,
        );
    }, [login]);

    const toggleSubscribe = () => {
        if (!author) {
            return;
        }
        if (!author.isSubscribed) {
            setAuthor({
                ...author,
                isSubscribed: !author.isSubscribed,
                subscribersCount: author.subscribersCount + 1,
            });
            authService.subscribe({ authorLogin: author.login });
            return;
        }
        setAuthor({
            ...author,
            subscribersCount: author.subscribersCount - 1,
            isSubscribed: !author.isSubscribed,
        });
        authService.unsubscribe({ authorLogin: author.login });
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
                                    [styles.profile__btn_secondary]: author.isSubscribed,
                                })}
                                onClick={() => toggleSubscribe()}
                            >
                                {author.isSubscribed ? 'Отписаться' : 'Подписаться'}
                            </button>
                        )}
                        {author.isMe && (
                            <button
                                className={cn(styles.profile__btn, styles.profile__btn_secondary)}
                                onClick={() => logout && logout()}
                            >
                                Выйти
                            </button>
                        )}
                    </div>

                    <Gallery posts={author.posts} />
                </div>
            )}
        </>
    );
};
