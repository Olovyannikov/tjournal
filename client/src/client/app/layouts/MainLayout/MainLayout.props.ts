import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface MainLayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    hideComments?: boolean;
    contentFullWidth?: boolean;
    children?: ReactNode;
}
