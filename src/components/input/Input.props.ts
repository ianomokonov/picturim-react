import { ReactElement } from 'react';

export interface InputProps {
    value: string;
    placeholder?: string;
    setValue: (value: string) => void;
    icon?: ReactElement;
}
