import clsx from 'clsx';
import { useRef, useState, KeyboardEvent, Component, FunctionComponent } from 'react';

import { Main } from './Main/Main';
import { Header } from './Header/Header';
import { LeftSidebar } from './LeftSidebar/LeftSidebar';
import { RightSidebar } from './RightSidebar/RightSidebar';
import { CssBaseline } from '@material-ui/core';

import s from './MainLayout.module.scss';
import { MainLayoutProps } from './MainLayout.props';

export const MainLayout = ({
                               children,
                               className,
                               hideMenu,
                               hideComments,
                               contentFullWidth,
                               ...props
                           }: MainLayoutProps): JSX.Element => {
    const [isSkip, setSkip] = useState<boolean>(false);
    const bodyRef = useRef<HTMLDivElement>(null);

    const skipContentAction = (key: KeyboardEvent) => {
        if (key.code === 'Space' || key.code === 'Enter') {
            key.preventDefault();
            bodyRef.current?.focus();
        }

        setSkip(false);
    };

    return (
        <>
            <Header />
            <CssBaseline />
            <div className={clsx('wrapper', className)} {...props}>
                <a
                    onFocus={() => setSkip(true)}
                    onBlur={() => setSkip(false)}
                    onKeyDown={skipContentAction}
                    tabIndex={0} className={`${s.skip} ${isSkip && s.displayed}`}
                >
                    Сразу к содержанию
                </a>
                {!hideMenu && <LeftSidebar />}
                <Main className={clsx({ 'content--full': contentFullWidth })}>{children}</Main>
                {!hideComments && <RightSidebar />}
            </div>
        </>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>): (props: T) => void => {
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <MainLayout>
                <Component {...props} />
            </MainLayout>
        );
    };
};
