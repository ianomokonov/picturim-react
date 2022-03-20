import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { PostDto } from '../../_services/dto/post.dto';

export interface GalleryProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    posts: PostDto[];
}
