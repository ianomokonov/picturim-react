import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { getHeaders } from '../utils/jwt';
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
}
