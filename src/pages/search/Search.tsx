import { ReactElement, useContext, useEffect, useState } from 'react';
import { Gallery } from '../../components/gallery/Gallery';
import { Input } from '../../components/input/Input';
import { HeaderContext } from '../../contexts/HeaderContext';
import styles from './Search.module.scss';

export const Search = (): ReactElement => {
    const { setHeader } = useContext(HeaderContext);
    useEffect(() => {
        setHeader();
    });

    const [searchValue, setSearchValue] = useState('');

    return (
        <>
            <div className={styles.search}>
                <div className={styles.search__input}>
                    <Input value={searchValue} setValue={setSearchValue} />
                </div>
            </div>
            <Gallery />
        </>
    );
};
