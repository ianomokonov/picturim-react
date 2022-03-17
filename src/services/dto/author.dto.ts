import { PostDto } from './post.dto';

export interface AuthorShortDto {
    _id: string;
    login: string;
    img: string;
}

export interface AuthorDto extends AuthorShortDto {
    email: string;
    name: string;
    description: string;
    link: string;
    posts: PostDto[];
    postsCount: number;
    subscriptionsCount: number;
    subscribersCount: number;
    isMe: boolean;
    isSubscribed: boolean;
}
