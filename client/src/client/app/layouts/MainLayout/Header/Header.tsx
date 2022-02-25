import { useState } from 'react';

import Link from 'next/link';
import {
    Button,
    IconButton,
    Paper,
} from '@material-ui/core';
import {
    SearchOutlined as SearchIcon,
    SmsOutlined as MessageIcon,
    Menu as MenuIcon,
    NotificationsNoneOutlined as NotificationIcon, AccountCircleOutlined,
} from '@material-ui/icons';

import Logo from './img/logo.svg';

import s from './Header.module.scss';
import { AuthDialog } from '@/components';

export const Header = (): JSX.Element => {
    const [isOpenAuthDialog, setOpenAuthDialog] = useState<boolean>(false);

    const openAuthDialog = () => setOpenAuthDialog(true);
    const closeAuthDialog = () => setOpenAuthDialog(false);

    return (
        <header className={s.header}>
            <Paper classes={{ root: s.root }} elevation={0}>
                <div className='d-flex align-center'>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Link href='/'>
                        <a className={s.logo}>
                            <Logo width={35} height={35} />
                        </a>
                    </Link>
                    <div className={s.searchBlock}>
                        <SearchIcon />
                        <input type='text' placeholder='Поиск' />
                    </div>
                    <Link href='/write'>
                        <Button href='/write' variant='contained' className={s.penButton}>
                            Новая запись
                        </Button>
                    </Link>
                </div>
                <div className='d-flex align-center'>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationIcon />
                    </IconButton>
                    {/*<Link href='/profile/1'>*/}
                    {/*    <a className='d-flex align-center'>*/}
                    {/*        <Avatar*/}
                    {/*            className={s.avatar}*/}
                    {/*            alt='Remy Sharp'*/}
                    {/*            src='https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/'*/}
                    {/*        />*/}
                    {/*        <ArrowBottom />*/}
                    {/*    </a>*/}
                    {/*</Link>*/}
                    <button className={s.login} onClick={openAuthDialog}>
                        <AccountCircleOutlined />
                        Войти
                    </button>
                </div>
                <AuthDialog onClose={closeAuthDialog} open={isOpenAuthDialog} />
            </Paper>
        </header>
    );
};
