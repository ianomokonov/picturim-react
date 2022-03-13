import { ReactElement, useContext, useEffect, useState } from 'react';
// import { HeaderContext } from '../../contexts/HeaderContext';
import { Comment } from '../../components/comment/Comment';
import { HeaderContext } from '../../contexts/HeaderContext';
import cn from 'classnames';
import styles from './Comments.module.scss';
import { Input } from '../../components/input/Input';

export const Comments = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    const [commentValue, setCommentValue] = useState('');
    useEffect(() => {
        setHeader(
            'Комментарии',
            <div>
                <i className="fas fa-share"></i>
            </div>,
        );
    }, []);

    return (
        <div className={cn('p-3', styles.comments)}>
            <div className={styles.comments__body}>
                <Comment className={styles.comments__item} />
                <Comment className={styles.comments__item} />
            </div>

            <div className={styles.comments__input}>
                <Input
                    placeholder="Комментарий"
                    value={commentValue}
                    setValue={setCommentValue}
                    action={<i className="fas fa-arrow-right"></i>}
                />
            </div>
        </div>
    );
};
