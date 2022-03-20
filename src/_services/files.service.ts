import axios from 'axios';
import { BASE_URL, HOST } from '../utils/constants';
import { getHeaders } from '../utils/jwt';

export class FilesService {
    private readonly SERVICE_BASE_URL = `${BASE_URL}/files`;

    public upload(data: FormData): Promise<string> {
        return axios
            .post<string>(`${this.SERVICE_BASE_URL}/upload`, data, {
                headers: getHeaders(),
            })
            .then(({ data: d }) => `${HOST}/${d}`);
    }
}
