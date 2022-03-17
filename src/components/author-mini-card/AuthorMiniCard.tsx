import { ReactElement } from 'react';
import cn from 'classnames';
import styles from './AuthorMiniCard.module.scss';
import { AuthorMiniCardProps } from './AuthorMiniCard.props';

export const AuthorMiniCard = ({
    className,
    author,
    ...props
}: AuthorMiniCardProps): ReactElement => {
    return (
        <div className={cn(className, styles.author)} {...props}>
            <img className={styles.author__ava} src={author.img} alt="" />
            <span className={styles.author__name}>{author.login}</span>
        </div>
    );
};
