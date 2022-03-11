import { ReactElement } from 'react';
import { FileUpload } from '../../layout/Footer/Footer';
import styles from './CreatePost.module.scss';

export interface CreatePostProps {
    upload: FileUpload;
    onClose: () => void;
}

export const CreatePost = ({ upload, onClose }: CreatePostProps): ReactElement => {
    return (
        <div className={styles.modal}>
            <div className={styles.create}>
                <div className={styles.create__header}>
                    <div className={styles.create__title}>Создание публикации</div>
                    <div className={styles.create__actions} onClick={() => onClose()}>
                        <i className="fas fa-times"></i>
                    </div>
                </div>
                <img className={styles.create__img} src={upload.path} alt="" />
                <div className={styles.create__description}>
                    <small>Описание</small>
                    <textarea></textarea>
                </div>
                <div className="p-3">
                    <button className={styles.create__btn}>Создать</button>
                </div>
            </div>
        </div>
    );
};
