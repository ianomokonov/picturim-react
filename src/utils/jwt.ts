import { AxiosRequestHeaders } from 'axios';
import { JwtDto } from '../_services/dto/jwt.dto';
import { JWT_KEY } from './constants';

export const getTokens = (): JwtDto | null => {
    const tokens = localStorage.getItem(JWT_KEY);
    return tokens ? JSON.parse(tokens) : null;
};

export const saveTokens = (tokens: JwtDto | null): void => {
    if (!tokens) {
        localStorage.removeItem(JWT_KEY);
        return;
    }
    localStorage.setItem(JWT_KEY, JSON.stringify(tokens));
};

export const getHeaders = (): AxiosRequestHeaders => {
    const tokens = getTokens();

    if (!tokens) {
        return {};
    }

    return {
        Authorization: `Bearer ${tokens.accessToken}`,
    };
};
