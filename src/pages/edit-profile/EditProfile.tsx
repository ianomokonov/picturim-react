import { ReactElement, useContext, useEffect, useState } from 'react';
import { Input } from '../../components/input/Input';
import { HeaderContext } from '../../_contexts/HeaderContext';
import { FileUpload } from '../../layout/Footer/Footer';
import styles from './EditProfile.module.scss';

export const EditProfile = (): ReactElement => {
    const [formData, setFormData] = useState<any>({ name: 'Ваня' });
    const { setHeader } = useContext(HeaderContext);
    useEffect(() => {
        setHeader('Редактирование профиля');
    }, []);
    const setData = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };
    return (
        <div className={styles.edit}>
            <div className={styles.edit__header}>
                <div
                    className={styles.edit__photo}
                    style={{ backgroundImage: 'url(/assets/ava.jpg)' }}
                ></div>
                <div className={styles.edit__name}>
                    <Input
                        placeholder="Имя"
                        value={formData.name}
                        setValue={(v) => setData('name', v)}
                    />
                </div>
            </div>
            <div className={styles.edit__description}>
                <textarea placeholder="Описание"></textarea>
            </div>
            <div className={styles.edit__link}>
                <Input
                    value={formData.link}
                    setValue={(v) => setData('link', v)}
                    icon={<i className="fas fa-link"></i>}
                />
            </div>
            <div>
                <button className={styles.edit__btn}>Сохранить</button>
            </div>
        </div>
    );
};
