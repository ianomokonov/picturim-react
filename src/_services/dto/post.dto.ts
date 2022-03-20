import { AuthorShortDto } from './author.dto';
import { PostShortDto } from './post-short.dto';

export interface PostDto extends PostShortDto {
    description: string;
    createdAt: Date;
    isLiked: boolean;
    likesCount: number;
    author: AuthorShortDto;
    commentsCount: number;
}
