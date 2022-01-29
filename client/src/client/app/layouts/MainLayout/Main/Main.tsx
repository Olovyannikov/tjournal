import clsx from 'clsx';

import { MainProps } from './Main.props';

export const Main = ({ children, className }: MainProps): JSX.Element =>
    <main className={clsx('content', className)}>
        {children}
    </main>;

