import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { getHeaders, getTokens, saveTokens } from '../utils/jwt';
import { AuthorDto } from './dto/author.dto';
import { JwtDto } from './dto/jwt.dto';
import { LoginDto } from './dto/login.dto';
import { SignInDto } from './dto/sign-in.dto';
import { SubscribeDto } from './dto/subscribe.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

export class AuthorService {
    private readonly SERVICE_BASE_URL = `${BASE_URL}/auth`;

    public logIn(data: LoginDto): Promise<void> {
        return axios.post<JwtDto>(`${this.SERVICE_BASE_URL}/log-in`, data).then(({ data }) => {
            saveTokens(data);
        });
    }

    public signIn(data: SignInDto): Promise<void> {
        return axios.post<JwtDto>(`${this.SERVICE_BASE_URL}/sign-in`, data).then(({ data }) => {
            saveTokens(data);
        });
    }

    public async subscribe(data: SubscribeDto): Promise<void> {
        return axios
            .post<JwtDto>(`${this.SERVICE_BASE_URL}/subscribe`, data, { headers: getHeaders() })
            .then(({ data }) => {
                saveTokens(data);
            });
    }

    public async unsubscribe(data: SubscribeDto): Promise<void> {
        return axios
            .post<void>(`${this.SERVICE_BASE_URL}/unsubscribe`, data, {
                headers: getHeaders(),
            })
            .then(({ data }) => data);
    }

    public async getAuthorInfo(): Promise<AuthorDto> {
        return axios
            .get<AuthorDto>(`${this.SERVICE_BASE_URL}`, {
                headers: getHeaders(),
            })
            .then(({ data }) => data);
    }

    public async updateAuthorInfo(data: Partial<UpdateAuthorDto>): Promise<void> {
        return axios
            .patch<void>(`${this.SERVICE_BASE_URL}`, data, {
                headers: getHeaders(),
            })
            .then(({ data }) => data);
    }
}
