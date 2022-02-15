import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import s from './Container.module.scss';
import { ContainerProps } from './Container.props';

export const Container = ({ children, className, ...props }: PropsWithChildren<ContainerProps>): JSX.Element =>
    <div className={clsx(s.container, className)} {...props}>
        {children}
    </div>;
