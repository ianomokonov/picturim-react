import { ReactElement, useContext, useEffect, useRef } from 'react';
import { HeaderContext } from '../../contexts/HeaderContext';

export const CreatePost = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    const inputEl = useRef<HTMLInputElement>(null);
    useEffect(() => {
        setHeader('Создание публикации');
        inputEl.current?.click();
    }, []);

    return (
        <div>
            Создание
            <input type="file" hidden ref={inputEl} />
        </div>
    );
};
