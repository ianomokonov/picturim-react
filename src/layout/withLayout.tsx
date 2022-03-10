import { FunctionComponent } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { LayoutProps } from './Layout.props';
import cn from 'classnames';
import styles from './Layout.module.scss';

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={cn(styles.main, 'container')}>
            <div className="main__header">
                <Header className={styles.header} />
            </div>
            <div className="main__body">
                <div className={styles.content}>{children}</div>
            </div>
            <div className="main__footer">
                <Footer className={styles.footer} />
            </div>
        </div>
    );
};
