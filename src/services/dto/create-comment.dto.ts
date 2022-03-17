import { UpdateCommentDto } from './update-comment.dto';

export interface CreateCommentDto extends UpdateCommentDto {
  postId: string;
}
