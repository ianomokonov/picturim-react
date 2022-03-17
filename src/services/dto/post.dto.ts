import { AuthorShortDto } from "./author.dto";


export interface PostDto {
  _id: string;
  img: string;
  description: string;
  createdAt: Date;
  isLiked: boolean;
  likesCount: number;
  author: AuthorShortDto;
  commentsCount: number;
}
