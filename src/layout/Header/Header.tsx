import React, { ReactElement } from 'react';
import styles from './Header.module.scss';
import cn from 'classnames';
import { HeaderProps } from './Header.props';

export const Header = ({ className }: HeaderProps): ReactElement => {
    return (
        <header className={cn(className, styles.header)}>
            <div className={styles.header__logo}>Picturim</div>
            <div className={styles.header__actions}>
                <div className={styles.header__action}>
                    <i className="fas fa-comment-dots"></i>
                </div>
            </div>
        </header>
    );
};
