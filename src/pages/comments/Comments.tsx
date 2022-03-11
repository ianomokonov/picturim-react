import { ReactElement, useContext, useEffect } from 'react';
// import { HeaderContext } from '../../contexts/HeaderContext';
import { Comment } from '../../components/comment/Comment';
import { HeaderContext } from '../../contexts/HeaderContext';

export const Comments = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    useEffect(() => {
        setHeader(
            'Комментарии',
            <div>
                <i className="fas fa-share"></i>
            </div>,
        );
    }, []);

    return (
        <div className="p-3">
            <Comment />
        </div>
    );
};
