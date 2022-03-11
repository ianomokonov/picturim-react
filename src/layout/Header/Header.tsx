import React, { ReactElement, useContext } from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';
import { HeaderProps } from './Header.props';
import { HeaderContext } from '../../contexts/HeaderContext';

export const Header = ({ className }: HeaderProps): ReactElement => {
    const { title, actions } = useContext(HeaderContext);
    return (
        <header className={cn(className, styles.header)}>
            <div className={styles.header__logo}>{title}</div>
            <div className={styles.header__actions}>{actions}</div>
        </header>
    );
};
