import { ReactElement } from 'react';
import styles from './Footer.module.scss';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';

export const Footer = ({ className }: FooterProps): ReactElement => {
    return (
        <footer className={cn(styles['main-menu'], className)}>
            <NavLink to="/" className={styles['main-menu__item']}>
                <i className="fas fa-home"></i>
            </NavLink>
            <NavLink to="/search" className={styles['main-menu__item']}>
                <i className="fas fa-search"></i>
            </NavLink>
            <NavLink to="/post/create" className={styles['main-menu__item']}>
                <i className="fas fa-plus"></i>
            </NavLink>
            <NavLink to="/actions" className={styles['main-menu__item']}>
                <i className="far fa-heart"></i>
            </NavLink>
            <NavLink to="/profile" className={styles['main-menu__item']}>
                <i className="far fa-user"></i>
            </NavLink>
        </footer>
    );
};
