import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { PostDto } from '../../_services/dto/post.dto';

export interface PostProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    post: PostDto;
    onToogleLike: (postId: string) => void;
}
