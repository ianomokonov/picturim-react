import { AuthorShortDto } from "./author.dto";


export interface CommentDto {
  _id: string;
  text: string;
  createdAt: Date;
  isLiked: boolean;
  likesCount: number;
  author: AuthorShortDto;
}
