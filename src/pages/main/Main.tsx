import { ReactElement, useContext, useEffect } from 'react';
import { Post } from '../../components/post/Post';
import { HeaderContext } from '../../contexts/HeaderContext';
import styles from './Main.module.scss';

export const Main = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    useEffect(() => {
        setHeader();
    });
    return (
        <div className={styles['photo-list']}>
            <Post className={styles['photo-list__item']} />
            <Post className={styles['photo-list__item']} />
            <Post className={styles['photo-list__item']} />
            <Post className={styles['photo-list__item']} />
        </div>
    );
};
