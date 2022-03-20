/* eslint-disable no-unused-vars */
import { createContext, PropsWithChildren, ReactElement, useState } from 'react';

export interface IHeaderContext {
    title: string;
    actions: ReactElement | undefined;
    hasFooter: boolean;
    setHeader: (title?: string, actions?: ReactElement, hasFooter?: boolean) => void;
    setFooter: (has: boolean) => void;
}

const defaultState = {
    title: 'Picturim',
    actions: <div>{/* <i className="fas fa-comment-dots"></i> */}</div>,
    hasFooter: true,
    setHeader: () => {},
    setFooter: () => {},
};

export const HeaderContext = createContext<IHeaderContext>(defaultState);

export const HeaderContextProvider = ({ children }: PropsWithChildren<{}>) => {
    const [titleState, setTitleState] = useState<string>(defaultState.title);
    const [footerState, setFooterState] = useState<boolean>(defaultState.hasFooter);
    const [actionsState, setActionsState] = useState<ReactElement | undefined>(
        defaultState.actions,
    );

    const setHeader = (title?: string, actions?: ReactElement, hasFooter: boolean = true) => {
        setTitleState(title || defaultState.title);
        if (hasFooter) {
            setFooter(true);
        } else {
            setFooter(false);
        }

        if (!title) {
            setActionsState(actions || defaultState.actions);
            return;
        }
        setActionsState(actions);
    };

    const setFooter = (has: boolean) => {
        setFooterState(has);
    };

    return (
        <HeaderContext.Provider
            value={{
                title: titleState,
                actions: actionsState,
                setHeader,
                setFooter,
                hasFooter: footerState,
            }}
        >
            {children}
        </HeaderContext.Provider>
    );
};
