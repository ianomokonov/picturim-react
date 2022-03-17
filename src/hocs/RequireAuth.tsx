import { PropsWithChildren, ReactElement, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export const RequireAuth = ({ children }: PropsWithChildren<{}>): ReactElement => {
    const { author } = useContext(AuthContext);
    const location = useLocation();

    if (!author) {
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return <>{children}</>;
};
