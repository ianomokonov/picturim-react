import { ReactElement, useContext, useEffect, useMemo, useRef, useState } from 'react';
// import { HeaderContext } from '../../contexts/HeaderContext';
import { Comment } from '../../components/comment/Comment';
import { HeaderContext } from '../../_contexts/HeaderContext';
import cn from 'classnames';
import styles from './Comments.module.scss';
import { Input } from '../../components/input/Input';
import { useParams } from 'react-router-dom';
import { CommentService } from '../../_services/comment.service';
import { CommentDto } from '../../_services/dto/comment.dto';

export const Comments = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    const commentService = useMemo(() => new CommentService(), []);
    const { id: postId } = useParams();
    const [commentValue, setCommentValue] = useState('');
    const [comments, setComments] = useState<CommentDto[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        setHeader('Комментарии', <div>{/* <i className="fas fa-share"></i> */}</div>);
    }, []);

    useEffect(() => {
        if (!postId) {
            return;
        }
        commentService.getByPostId(postId).then((c) => {
            setComments(c);
        });
    }, [postId]);

    const onAnswer = (login: string) => {
        setCommentValue(`@${login} `);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const onAddComment = async () => {
        if (!commentValue || !postId) {
            return;
        }
        const comment = await commentService.create({ postId, text: commentValue });
        setCommentValue('');
        setComments([...comments, comment]);
    };

    return (
        <div className={cn('p-3', styles.comments)}>
            <div className={styles.comments__body}>
                {comments?.map((c) => (
                    <Comment
                        comment={c}
                        key={c._id}
                        className={styles.comments__item}
                        onAnswer={onAnswer}
                    />
                ))}
            </div>

            <div className={styles.comments__input}>
                <Input
                    placeholder="Комментарий"
                    value={commentValue}
                    ref={inputRef}
                    setValue={setCommentValue}
                    action={<i className="fas fa-arrow-right" onClick={onAddComment}></i>}
                />
            </div>
        </div>
    );
};
