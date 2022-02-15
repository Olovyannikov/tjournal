import { FC, useState } from 'react';

import MoreIcon from '@material-ui/icons/MoreHorizOutlined';
import { Typography, IconButton, MenuItem, Menu } from '@material-ui/core';

import s from './Comment.module.scss';
import { CommentPostProps } from './Comment.props';

export const Comment: FC<CommentPostProps> = ({ user, text, createdAt }: CommentPostProps) => {
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
                    src={user.avatarUrl}
                    alt='Avatar'
                />
                <b>{user.fullName}</b>
                <span>{createdAt}</span>
            </div>
            <Typography className={s.text}>
                {text}
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
