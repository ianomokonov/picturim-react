import { HTMLAttributes, DetailedHTMLProps } from 'react';
import { PostShortDto } from '../../_services/dto/post-short.dto';

export interface GalleryProps
    extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    posts: PostShortDto[];
}
