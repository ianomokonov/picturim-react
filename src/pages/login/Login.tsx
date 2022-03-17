import { ReactElement, useContext, useEffect, useMemo, useState } from 'react';
import { Input } from '../../components/input/Input';
import { HeaderContext } from '../../contexts/HeaderContext';
import styles from './Login.module.scss';
import cn from 'classnames';
import { AuthorService } from '../../services/author.service';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export const Login = (): ReactElement => {
    const { setHeader, setFooter } = useContext(HeaderContext);
    const [formData, setFormData] = useState<any>({});
    const [isLogin, setIsLogin] = useState(true);
    const { login, signin } = useContext(AuthContext);

    useEffect(() => {
        if (isLogin) {
            setHeader('Вход', undefined, false);
            return;
        }
        setHeader('Регистрация', undefined, false);
    }, [isLogin]);

    const setData = (field: string, value: string) => {
        setFormData({ ...formData, [field]: value });
    };

    const onSubmit = async () => {
        if (isLogin) {
            const { login: loginValue, password } = formData;
            login && login({ login: loginValue, password });
            return;
        }

        signin && signin(formData);
    };

    return (
        <div className={styles.login}>
            {!isLogin && (
                <div className={styles.login__field}>
                    <Input
                        placeholder="Email"
                        value={formData.email}
                        setValue={(v) => setData('email', v)}
                    />
                </div>
            )}
            <div className={styles.login__field}>
                <Input
                    placeholder="Login"
                    value={formData.login}
                    setValue={(v) => setData('login', v)}
                />
            </div>
            <div className={styles.login__field}>
                <Input
                    placeholder="Password"
                    value={formData.password}
                    setValue={(v) => setData('password', v)}
                />
            </div>
            <div className={styles.login__actions}>
                <button
                    className={cn(styles.login__btn, {
                        [styles.login__btn_secondary]: isLogin,
                    })}
                    onClick={() => (isLogin ? setIsLogin(false) : onSubmit())}
                >
                    Зарегистрироваться
                </button>
                <button
                    className={cn(styles.login__btn, {
                        [styles.login__btn_secondary]: !isLogin,
                    })}
                    onClick={() => (isLogin ? onSubmit() : setIsLogin(true))}
                >
                    Войти
                </button>
            </div>
        </div>
    );
};
