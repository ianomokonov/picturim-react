import { UpdatePostDto } from './update-post.dto';

export interface CreatePostDto extends UpdatePostDto {
    img: string;
}
