/* eslint-disable no-unused-vars */
import { createContext, PropsWithChildren, ReactElement, useState } from 'react';

export interface IHeaderContext {
    title: string;
    actions: ReactElement | undefined;
    setHeader: (title?: string, actions?: ReactElement) => void;
}

const defaultState = {
    title: 'Picturim',
    actions: (
        <div>
            <i className="fas fa-comment-dots"></i>
        </div>
    ),
    setHeader: () => {},
};

export const HeaderContext = createContext<IHeaderContext>(defaultState);

export const HeaderContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const [titleState, setTitleState] = useState<string>(defaultState.title);
    const [actionsState, setActionsState] = useState<ReactElement | undefined>(
        defaultState.actions,
    );

    const setHeader = (title?: string, actions?: ReactElement) => {
        setTitleState(title || defaultState.title);
        if (!title) {
            setActionsState(actions || defaultState.actions);
            return;
        }
        setActionsState(actions);
    };

    return (
        <HeaderContext.Provider value={{ title: titleState, actions: actionsState, setHeader }}>
            {children}
        </HeaderContext.Provider>
    );
};
