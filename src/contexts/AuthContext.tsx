/* eslint-disable no-unused-vars */
import {
    createContext,
    PropsWithChildren,
    ReactElement,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthorService } from '../services/author.service';
import { AuthorDto, AuthorShortDto } from '../services/dto/author.dto';
import { LoginDto } from '../services/dto/login.dto';
import { SignInDto } from '../services/dto/sign-in.dto';
import { getTokens, saveTokens } from '../utils/jwt';

export interface IAuthContext {
    author?: AuthorShortDto | null;
    isAuthReady?: boolean;
    login?: (data: LoginDto) => void;
    signin?: (data: SignInDto) => void;
    logout?: () => void;
    getAuthor?: () => Promise<AuthorDto | void>;
}

export const AuthContext = createContext<IAuthContext>({});

export const AuthContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const authService = useMemo(() => new AuthorService(), []);
    const navigate = useNavigate();
    const location = useLocation();
    const [author, setAuthor] = useState<AuthorDto | null>(null);
    const [isAuthReady, setIsAuthReady] = useState<boolean>(false);

    useEffect(() => {
        const tokens = getTokens();
        if (tokens) {
            authService.getAuthorInfo().then((author) => {
                setAuthor(author);
                setIsAuthReady(true);

                if (location.pathname === '/login') {
                    navigate(`/profile/${author.login}`, { replace: true });
                }
            });
            return;
        }
        setIsAuthReady(true);
        navigate('/login', { replace: true });
    }, [authService]);

    const login = async (data: LoginDto) => {
        try {
            await authService.logIn(data);
            const auth = await getAuthor();
            navigate(`/profile/${auth?.login}`, { replace: true });
        } catch (error) {
            console.log(error);
        }
    };

    const getAuthor = async () => {
        return authService
            .getAuthorInfo()
            .then((a) => {
                setAuthor(a);
                return a;
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const signin = async (data: SignInDto) => {
        try {
            await authService.signIn(data);
            const author = await authService.getAuthorInfo();
            setAuthor(author);
            navigate(`/profile/${author.login}`, { replace: true });
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
                isAuthReady,
                login,
                signin,
                logout,
                getAuthor,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
