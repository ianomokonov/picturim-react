import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import cn from 'classnames';
import styles from './Layout.module.scss';
import { Outlet } from 'react-router';

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
    return (
        <div className={cn(styles.main, 'container')}>
            <div className="main__header">
                <Header className={styles.header} />
            </div>
            <div className="main__body">
                <Outlet />
            </div>
            <div className="main__footer">
                <Footer className={styles.footer} />
            </div>
        </div>
    );
};
