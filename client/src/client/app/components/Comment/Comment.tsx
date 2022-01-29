import { FC, useState } from 'react';

import MoreIcon from '@material-ui/icons/MoreHorizOutlined';
import { Typography, IconButton, MenuItem, Menu } from '@material-ui/core';

import s from './Comment.module.scss';
import { CommentPostProps } from './Comment.props';

export const Comment: FC<CommentPostProps> = ({ user, text }: CommentPostProps) => {
    const [anchorEl, setAnchorEl] = useState<null>(null);

    const handleClick = (event: any): void => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
    };

    return (
        <div className={s.comment}>
            <div className={s.userInfo}>
                <img
                    src='https://leonardo.osnova.io/104b03b4-5173-fd9f-2af9-b458dddc4a23/-/scale_crop/108x108/-/format/webp/'
                    alt='Avatar'
                />
                <b>Master Oogway</b>
                <span>5 часов</span>
            </div>
            <Typography className={s.text}>
                Суперджет это ад адский, два раза летала и оба раза прощалась с жизнью. Трясёт хуже, чем в
                копейке по разьебанной дороге
            </Typography>
            <span className={s.replyBtn}>Ответить</span>
            <IconButton onClick={handleClick}>
                <MoreIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                elevation={2}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                keepMounted>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </div>
    );
};
