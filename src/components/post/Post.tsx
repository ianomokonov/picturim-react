import { ReactElement } from 'react';
import styles from './Post.module.scss';
import cn from 'classnames';
import { PostProps } from './Post.props';

export const Post = ({ className, ...props }: PostProps): ReactElement => {
    return (
        <div className={cn(styles.photo, className)} {...props}>
            <div className={styles.photo__header}>
                <div className={cn(styles.photo__author, styles.author)}>
                    <img className={styles.author__ava} src="/assets/ava.jpg" alt="" />
                    <span className={styles.author__name}>vanika_koma</span>
                </div>

                <div className={styles.photo__menu}>
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <img className={styles.photo__content} src="/assets/photo.jpg" alt="" />
            <div className={styles.photo__body}>
                <div className={styles.photo__actions}>
                    <i className="far fa-heart"></i>
                    <i className="fas fa-share"></i>
                </div>
                <div className={styles.photo__likes}>Нравится: 1200</div>
                <div className={styles.photo__comments}>
                    <div className={cn(styles.comment, styles.comment_first)}>
                        <div className={styles['comment__author-photo']}>
                            <div style={{ backgroundImage: 'url(/assets/ava.jpg)' }}></div>
                        </div>
                        <div className={styles.comment__content}>
                            <span className={styles['comment__author-name']}>vanika_koma</span>
                            <span className={styles.comment__text}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                                facere quam exercitationem illum dolorum temporibus blanditiis
                                molestias maiores aliquid unde. Incidunt inventore eligendi, culpa
                                ea, amet in id similique fugit nostrum perspiciatis at odit quos
                                eius blanditiis consequatur voluptatibus architecto accusamus hic
                                aspernatur? Beatae, voluptas recusandae. Eius quisquam assumenda
                                itaque adipisci quaerat quas sed corrupti! Molestiae fugiat mollitia
                                amet ipsum velit nihil ab pla...
                            </span>
                            <small className={styles.comment__more}>ещё</small>
                            <a href="./comments.html" className={styles['comment__show-all']}>
                                Посмотреть все комментарии
                            </a>
                            <div className={styles.comment__stats}>
                                <small className={styles['comment__create-duration']}>1д.</small>
                                <small className={styles.comment__likes}>Нравится: 125</small>
                                <small className={styles.comment__replay}>Ответить</small>
                            </div>
                        </div>
                        <div className={styles.comment__actions}>
                            <i className="far fa-heart"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
