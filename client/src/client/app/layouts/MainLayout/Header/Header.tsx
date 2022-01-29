import Link from 'next/link';
import Image from 'next/image';

import { Avatar, Button, IconButton, Paper } from '@material-ui/core';
import {
    SearchOutlined as SearchIcon,
    CreateOutlined as PenIcon,
    SmsOutlined as MessageIcon,
    Menu as MenuIcon,
    ExpandMoreOutlined as ArrowBottom,
    NotificationsNoneOutlined as NotificationIcon,
} from '@material-ui/icons';

import logo from './logo.svg';

import s from './Header.module.scss';

export const Header = (): JSX.Element => {
    return (
        <header>
            <Paper classes={{ root: s.root }} elevation={0}>
                <div className='d-flex align-center'>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Link href='/'>
                        <a className={s.logo}>
                            <Image
                                width={35}
                                height={35}
                                src={logo}
                                alt='Logotype'
                            />
                        </a>
                    </Link>
                    <div className={s.searchBlock}>
                        <SearchIcon />
                        <input type='text' placeholder='Поиск' />
                    </div>
                    <Button variant='contained' className={s.penButton}>
                        Новая запись
                    </Button>
                </div>
                <div className='d-flex align-center'>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationIcon />
                    </IconButton>
                    <Link href='/profile/1'>
                        <a className='d-flex align-center'>
                            <Avatar
                                className={s.avatar}
                                alt='Remy Sharp'
                                src='https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/'
                            />
                            <ArrowBottom />
                        </a>
                    </Link>
                </div>
            </Paper>
        </header>
    );
};
