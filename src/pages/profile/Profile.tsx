import { ReactElement, useContext, useEffect } from 'react';
import { HeaderContext } from '../../contexts/HeaderContext';
import styles from './Profile.module.scss';
import cn from 'classnames';
import { Gallery } from '../../components/gallery/Gallery';

export const Profile = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    useEffect(() => {
        setHeader(
            'vanika_koma',
            <div>
                <i className="fas fa-bars"></i>
            </div>,
        );
    });

    return (
        <div className={styles.profile}>
            <div className={styles.profile__header}>
                <div
                    className={styles.profile__ava}
                    style={{ backgroundImage: 'url(../assets/ava.jpg)' }}
                ></div>
                <div className={styles.profile__stats}>
                    <div className={cn(styles.profile__stat, styles.stat)}>
                        <div className={styles.stat__value}>179</div>
                        <div className={styles.stat__label}>Публикации</div>
                    </div>
                    <div className={cn(styles.profile__stat, styles.stat)}>
                        <div className={styles.stat__value}>200</div>
                        <div className={styles.stat__label}>Подписчики</div>
                    </div>
                    <div className={cn(styles.profile__stat, styles.stat)}>
                        <div className={styles.stat__value}>159</div>
                        <div className={styles.stat__label}>Подписки</div>
                    </div>
                </div>
            </div>
            <div className={styles.profile__name}>Ваня</div>
            <div className={styles.profile__description}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus incidunt
                molestias vero eaque distinctio deserunt maiores laborum officiis sint dolore enim
                ipsa quis consectetur natus repudiandae exercitationem, reprehenderit tempore atque.
            </div>
            <a href="http://progoff.ru" className={styles.profile__link}>
                http://progoff.ru
            </a>
            <Gallery />
        </div>
    );
};
