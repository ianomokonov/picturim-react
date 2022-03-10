import { ReactElement } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';
import cn from 'classnames';

export const Footer = ({ className }: FooterProps): ReactElement => {
    return (
        <footer className={cn(styles['main-menu'], className)}>
            <a href="./index.html" className={styles['main-menu__item']}>
                <i className="fas fa-home"></i>
            </a>
            <a href="./search.html" className={styles['main-menu__item']}>
                <i className="fas fa-search"></i>
            </a>
            <div className={styles['main-menu__item']}>
                <i className="fas fa-plus"></i>
            </div>
            <a href="./actions.html" className={styles['main-menu__item']}>
                <i className="far fa-heart"></i>
            </a>
            <a href="./profile.html" className={styles['main-menu__item']}>
                <i className="far fa-user"></i>
            </a>
        </footer>
    );
};
