import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { getHeaders } from '../utils/jwt';
import { CommentDto } from './dto/comment.dto';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PostDto } from './dto/post.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

export class CommentService {
    private readonly SERVICE_BASE_URL = `${BASE_URL}/comment`;

    public getByPostId(postId: string): Promise<CommentDto[]> {
        return axios
            .get<CommentDto[]>(`${this.SERVICE_BASE_URL}/byPost/${postId}`, {
                headers: getHeaders(),
            })
            .then(({ data }) => data);
    }

    public create(data: CreateCommentDto): Promise<CommentDto> {
        return axios
            .post<CommentDto>(`${this.SERVICE_BASE_URL}/create`, data, {
                headers: getHeaders(),
            })
            .then(({ data }) => {
                data.createdAt = new Date(data.createdAt);
                return data;
            });
    }

    public like(commentId: string): Promise<void> {
        return axios
            .post<void>(
                `${this.SERVICE_BASE_URL}/${commentId}/like`,
                {},
                {
                    headers: getHeaders(),
                },
            )
            .then(() => undefined);
    }

    public delete(commentId: string): Promise<void> {
        return axios
            .delete<void>(`${this.SERVICE_BASE_URL}/${commentId}`, {
                headers: getHeaders(),
            })
            .then(() => undefined);
    }

    public update(commentId: string, data: UpdateCommentDto): Promise<void> {
        return axios
            .patch<void>(`${this.SERVICE_BASE_URL}/${commentId}`, data, {
                headers: getHeaders(),
            })
            .then(() => undefined);
    }
}
