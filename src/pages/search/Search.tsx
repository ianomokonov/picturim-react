import { ReactElement, useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthorMiniCard } from '../../components/author-mini-card/AuthorMiniCard';
import { Gallery } from '../../components/gallery/Gallery';
import { Input } from '../../components/input/Input';
import { HeaderContext } from '../../_contexts/HeaderContext';
import { AuthorService } from '../../_services/author.service';
import { AuthorShortDto } from '../../_services/dto/author.dto';
import { PostShortDto } from '../../_services/dto/post-short.dto';
import { PostService } from '../../_services/post.service';
import styles from './Search.module.scss';

export const Search = (): ReactElement => {
    const authService = useMemo(() => new AuthorService(), []);
    const postService = useMemo(() => new PostService(), []);

    const [searchValue, setSearchValue] = useState('');
    const [isSearchingAuthors, setIsSearchingAuthors] = useState(false);
    const [authors, setAuthors] = useState<AuthorShortDto[]>([]);
    const [posts, setPosts] = useState<PostShortDto[]>([]);

    const { setHeader } = useContext(HeaderContext);
    useEffect(() => {
        setHeader();
    }, []);

    useEffect(() => {
        postService.getList().then((p) => setPosts(p));
    }, [postService]);

    useEffect(() => {
        const time = setTimeout(() => {
            authService.searchAuthors(searchValue).then((auth) => {
                setAuthors(auth);
            });
        }, 200);

        return () => {
            clearInterval(time);
        };
    }, [searchValue]);

    return (
        <>
            <div className={styles.search}>
                <div className={styles.search__input}>
                    <Input
                        value={searchValue}
                        className={styles['search__input-control']}
                        setValue={setSearchValue}
                        onFocus={() => setIsSearchingAuthors(true)}
                    />
                    {isSearchingAuthors && (
                        <span
                            className={styles.search__cancel}
                            onClick={() => setIsSearchingAuthors(false)}
                        >
                            Отмена
                        </span>
                    )}
                </div>
            </div>
            {!isSearchingAuthors && <Gallery posts={posts} />}
            {isSearchingAuthors && (
                <div className={styles.authors}>
                    {authors.map((a) => (
                        <Link
                            className={styles.authors__item}
                            key={a._id}
                            to={`/profile/${a.login}`}
                        >
                            <AuthorMiniCard author={a} />
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
};
