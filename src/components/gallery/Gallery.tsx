import { ReactElement } from 'react';
import styles from './Gallery.module.scss';
import cn from 'classnames';
import { GalleryProps } from './Gallery.props';
import { Link } from 'react-router-dom';

export const Gallery = ({ className, ...props }: GalleryProps): ReactElement => {
    return (
        <div className={cn(styles.gallery, className)} {...props}>
            <Link
                to="/post/1"
                className={styles.gallery__photo}
                style={{ backgroundImage: 'url(/assets/photo1.jpg)' }}
            ></Link>
            <Link
                to="/post/1"
                className={styles.gallery__photo}
                style={{ backgroundImage: 'url(/assets/photo2.jpg)' }}
            ></Link>
            <Link
                to="/post/1"
                className={styles.gallery__photo}
                style={{ backgroundImage: 'url(/assets/photo3.jpg)' }}
            ></Link>
            <Link
                to="/post/1"
                className={styles.gallery__photo}
                style={{ backgroundImage: 'url(/assets/photo.jpg)' }}
            ></Link>
            <Link
                to="/post/1"
                className={styles.gallery__photo}
                style={{ backgroundImage: 'url(/assets/ava.jpg)' }}
            ></Link>
        </div>
    );
};
