/* eslint-disable no-unused-vars */
import {
    createContext,
    PropsWithChildren,
    ReactElement,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthorService } from '../services/author.service';
import { AuthorDto } from '../services/dto/author.dto';
import { LoginDto } from '../services/dto/login.dto';
import { SignInDto } from '../services/dto/sign-in.dto';
import { getTokens, saveTokens } from '../utils/jwt';

export interface IAuthContext {
    author?: AuthorDto | null;
    login?: (data: LoginDto) => void;
    signin?: (data: SignInDto) => void;
    logout?: () => void;
}

export const AuthContext = createContext<IAuthContext>({});

export const AuthContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const authService = useMemo(() => new AuthorService(), []);
    const navigate = useNavigate();
    const [author, setAuthor] = useState<AuthorDto | null>(null);

    useEffect(() => {
        const tokens = getTokens();
        if (tokens) {
            authService.getAuthorInfo().then((author) => {
                setAuthor(author);
                navigate('/profile', { replace: true });
            });
            return;
        }
        navigate('/login', { replace: true });
    }, [authService]);

    const login = async (data: LoginDto) => {
        try {
            await authService.logIn(data);
            const author = await authService.getAuthorInfo();
            setAuthor(author);
            navigate('/profile', { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    const signin = async (data: SignInDto) => {
        try {
            await authService.signIn(data);
            const author = await authService.getAuthorInfo();
            setAuthor(author);
            navigate('/profile', { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    const logout = () => {
        saveTokens(null);
        setAuthor(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider
            value={{
                author,
                login,
                signin,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
