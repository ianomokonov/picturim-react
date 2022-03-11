import { ReactElement, useContext, useEffect } from 'react';
import { HeaderContext } from '../../contexts/HeaderContext';

export const Main = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    useEffect(() => {
        setHeader();
    });
    return <div>Главная</div>;
};
