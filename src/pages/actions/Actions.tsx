import { ReactElement, useContext, useEffect } from 'react';
import { HeaderContext } from '../../contexts/HeaderContext';
import styles from './Actions.module.scss';

export const Actions = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    useEffect(() => {
        setHeader('Действия');
    });

    return (
        <div className={styles.actions}>
            <div className={styles.action}>
                <div
                    className={styles['action__author-photo']}
                    style={{ backgroundImage: 'url(/assets/ava.jpg)' }}
                ></div>
                <div className={styles.action__text}>
                    <span className={styles['action__author-name']}>vanika_koma</span>
                    <span className={styles.action__message}>нравится ваша публикация</span>
                    <span className={styles['action__creat-date']}>1 нед.</span>
                </div>
                <div className={styles.action__target}>
                    <img src="../assets/ava.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};
