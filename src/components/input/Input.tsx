import { FormEvent, ReactElement } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './Input.props';
import cn from 'classnames';

export const Input = ({ value, placeholder, setValue }: InputProps): ReactElement => {
    return (
        <div className="control control_prepend">
            <input
                value={value}
                className={cn(styles.input, 'input')}
                type="text"
                placeholder={placeholder || 'Поиск'}
                onInput={({ currentTarget }: FormEvent<HTMLInputElement>) =>
                    setValue(currentTarget.value)
                }
            />
            <i className="fas fa-search prepended"></i>
        </div>
    );
};
