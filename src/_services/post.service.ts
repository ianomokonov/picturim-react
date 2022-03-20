import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { getHeaders } from '../utils/jwt';
import { PostShortDto } from './dto/post-short.dto';
import { PostDto } from './dto/post.dto';

export class PostService {
    private readonly SERVICE_BASE_URL = `${BASE_URL}/post`;

    public getPosts(): Promise<PostDto[]> {
        return axios
            .get<PostDto[]>(`${this.SERVICE_BASE_URL}/byAuthor/following`, {
                headers: getHeaders(),
            })
            .then(({ data }) => data);
    }

    public getPost(postId: string): Promise<PostDto> {
        return axios
            .get<PostDto>(`${this.SERVICE_BASE_URL}/${postId}`, {
                headers: getHeaders(),
            })
            .then(({ data }) => data);
    }

    public getList(): Promise<PostShortDto[]> {
        return axios
            .get<PostShortDto[]>(`${this.SERVICE_BASE_URL}/list`, {
                headers: getHeaders(),
            })
            .then(({ data }) => data);
    }

    public like(postId: string): Promise<void> {
        return axios
            .post<void>(
                `${this.SERVICE_BASE_URL}/${postId}/like`,
                {},
                {
                    headers: getHeaders(),
                },
            )
            .then(() => undefined);
    }
}
