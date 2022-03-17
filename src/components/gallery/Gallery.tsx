import { ReactElement } from 'react';
import styles from './Gallery.module.scss';
import cn from 'classnames';
import { GalleryProps } from './Gallery.props';
import { Link } from 'react-router-dom';

export const Gallery = ({ posts, className, ...props }: GalleryProps): ReactElement => {
    return (
        <div className={cn(styles.gallery, className)} {...props}>
            {posts.map((post) => (
                <Link
                    to={`/post/${post._id}`}
                    key={post._id}
                    className={styles.gallery__photo}
                    style={{ backgroundImage: `url(${post.img})` }}
                ></Link>
            ))}
        </div>
    );
};
