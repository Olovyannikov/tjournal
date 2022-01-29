import Link from 'next/link';

import { Button } from '@material-ui/core';

import { menu } from './LeftSidebar.data';

import s from './LeftSidebar.module.scss';
import { SidebarInterface } from './sidebar.interface';

export const LeftSidebar = (): JSX.Element => {
    return (
        <aside className={s.menu}>
            <ul>
                {menu.map(({ path, icon, text }: SidebarInterface): JSX.Element => (
                    <li key={path}>
                        <Link href={path}>
                            <Button>
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
