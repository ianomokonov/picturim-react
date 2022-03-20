import { ReactElement } from 'react';
import cn from 'classnames';
import styles from './AuthorMiniCard.module.scss';
import { AuthorMiniCardProps } from './AuthorMiniCard.props';
import { Link } from 'react-router-dom';

export const AuthorMiniCard = ({ className, author }: AuthorMiniCardProps): ReactElement => {
    return (
        <Link to={`/profile/${author.login}`} className={cn(className, styles.author)}>
            <img className={styles.author__ava} src={author.img} alt="" />
            <span className={styles.author__name}>{author.login}</span>
        </Link>
    );
};
