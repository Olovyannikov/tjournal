import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from '@material-ui/core';

import { menu } from './LeftSidebar.data';

import s from './LeftSidebar.module.scss';
import { SidebarInterface } from './sidebar.interface';

export const LeftSidebar = (): JSX.Element => {
    const router = useRouter();

    return (
        <aside className={s.menu}>
            <ul>
                {menu.map(({ path, icon, text }: SidebarInterface): JSX.Element => (
                    <li key={path}>
                        <Link href={path}>
                            <Button href={path} variant={router.asPath === path ? "contained" : "text"}>
                                {icon}
                                {text}
                            </Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};
