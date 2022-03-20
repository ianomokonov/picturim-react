import { FormEvent, ReactElement, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileUpload } from '../../layout/Footer/Footer';
import { FilesService } from '../../_services/files.service';
import { PostService } from '../../_services/post.service';
import styles from './CreatePost.module.scss';

export interface CreatePostProps {
    upload: FileUpload;
    onClose: () => void;
}

export const CreatePost = ({ upload, onClose }: CreatePostProps): ReactElement => {
    const filesService = useMemo(() => new FilesService(), []);
    const postService = useMemo(() => new PostService(), []);
    const navigate = useNavigate();
    const [description, setDescription] = useState<string>(
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate tenetur deserunt veritatis sunt. Eius voluptatem debitis magnam aliquid, velit perferendis est sequi. Minus non nemo quia voluptas ratione, inventore, quos autem obcaecati eum in commodi officiis. Culpa soluta cupiditate incidunt ab rerum, laborum asperiores eligendi alias rem et deserunt fuga ullam facilis velit dolorum ducimus architecto aliquam reprehenderit, dolore numquam quo, delectus possimus perspiciatis amet! Laudantium quo voluptates sequi aliquid doloribus dolorum, nostrum numquam quaerat incidunt recusandae explicabo, repellendus ad modi, expedita laboriosam distinctio voluptate culpa. Amet, minus, explicabo aliquam omnis repellat exercitationem delectus voluptatibus nam velit aspernatur maiores quidem.',
    );
    const onCreate = async () => {
        const fd = new FormData();
        fd.set('files', upload.file);
        const fileUrl = await filesService.upload(fd);
        const postId = await postService.create({ img: fileUrl, description });
        navigate(`/post/${postId}`);
        onClose();
    };
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
                    <textarea
                        value={description}
                        onInput={({ target }: FormEvent<HTMLTextAreaElement>) =>
                            setDescription((target as any).value)
                        }
                    ></textarea>
                </div>
                <div className="p-3">
                    <button className={styles.create__btn} onClick={onCreate}>
                        Создать
                    </button>
                </div>
            </div>
        </div>
    );
};
