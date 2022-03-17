import { FocusEvent, ReactElement } from 'react';

export interface InputProps {
    className?: string;
    value: string;
    placeholder?: string;
    setValue: (value: string) => void;
    icon?: ReactElement;
    action?: ReactElement;
    onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
}
