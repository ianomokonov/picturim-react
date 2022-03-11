import { ReactElement, useContext, useEffect } from 'react';
import { HeaderContext } from '../../contexts/HeaderContext';

export const Actions = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    useEffect(() => {
        setHeader('Действия');
    });

    return <div>Действия</div>;
};
