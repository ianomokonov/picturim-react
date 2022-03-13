import { ReactElement, useContext, useEffect, useRef, useState } from 'react';
// import { HeaderContext } from '../../contexts/HeaderContext';
import { Comment } from '../../components/comment/Comment';
import { HeaderContext } from '../../contexts/HeaderContext';
import cn from 'classnames';
import styles from './Comments.module.scss';
import { Input } from '../../components/input/Input';

export const Comments = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    const [commentValue, setCommentValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        setHeader('Комментарии', <div>{/* <i className="fas fa-share"></i> */}</div>);
    }, []);

    const onAnswer = (login: string) => {
        setCommentValue(`@${login} `);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className={cn('p-3', styles.comments)}>
            <div className={styles.comments__body}>
                <Comment className={styles.comments__item} onAnswer={onAnswer} />
                <Comment className={styles.comments__item} onAnswer={onAnswer} />
            </div>

            <div className={styles.comments__input}>
                <Input
                    placeholder="Комментарий"
                    value={commentValue}
                    ref={inputRef}
                    setValue={setCommentValue}
                    action={<i className="fas fa-arrow-right"></i>}
                />
            </div>
        </div>
    );
};
