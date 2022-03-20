import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import cn from 'classnames';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router';
import { useContext } from 'react';
import { HeaderContext } from '../_contexts/HeaderContext';

// export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
//     return function withLayoutComponent(props: T) {
//         return (
//             <Layout>
//                 <Component {...props} />
//             </Layout>
//         );
//     };
// };

export const Layout = () => {
    const { hasFooter } = useContext(HeaderContext);
    return (
        <div
            className={cn(styles.main, 'container', {
                [styles['main_no-footer']]: !hasFooter,
            })}
        >
            <div className={styles.main__header}>
                <Header className={styles.header} />
            </div>
            <div className={styles.main__body}>
                <Outlet />
            </div>
            {hasFooter && (
                <div className={styles.main__footer}>
                    <Footer className={styles.footer} />
                </div>
            )}
        </div>
    );
};
