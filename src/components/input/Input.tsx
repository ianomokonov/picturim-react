import { FormEvent, ReactElement } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './Input.props';
import cn from 'classnames';

export const Input = ({ value, placeholder, setValue, icon, action }: InputProps): ReactElement => {
    return (
        <div className={cn('control', { control_prepend: icon, control_append: action })}>
            <input
                value={value}
                className={cn(styles.input, 'input')}
                type="text"
                placeholder={placeholder ?? 'Поиск'}
                onInput={({ currentTarget }: FormEvent<HTMLInputElement>) =>
                    setValue(currentTarget.value)
                }
            />
            {icon && <span className="prepended">{icon}</span>}
            {action && <span className="appended">{action}</span>}
        </div>
    );
};
