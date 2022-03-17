/* eslint-disable react/display-name */
import { FormEvent, ForwardedRef, forwardRef, ReactElement, RefObject } from 'react';
import styles from './Input.module.scss';
import { InputProps } from './Input.props';
import cn from 'classnames';

export const Input = forwardRef(
    (
        { value, placeholder, className, setValue, icon, action, onFocus }: InputProps,
        ref: ForwardedRef<HTMLInputElement>,
    ): ReactElement => {
        return (
            <div
                className={cn('control', className, {
                    control_prepend: icon,
                    control_append: action,
                })}
            >
                <input
                    ref={ref}
                    value={value}
                    className={cn(styles.input, 'input')}
                    type="text"
                    placeholder={placeholder ?? 'Поиск'}
                    onInput={({ currentTarget }: FormEvent<HTMLInputElement>) =>
                        setValue(currentTarget.value)
                    }
                    onFocus={(event) => onFocus && onFocus(event)}
                />
                {icon && <span className="prepended">{icon}</span>}
                {action && <span className="appended">{action}</span>}
            </div>
        );
    },
);
