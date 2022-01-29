import { FC } from 'react';

import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import { items } from './RightSidebar.data';

import s from './RightSidebar.module.scss';
import { CommentItemProps } from './RightSidebar.props';

const CommentItem: FC<CommentItemProps> = ({ user, text, post }: CommentItemProps): JSX.Element => {
    return (
        <div className={s.commentItem}>
            <div className={s.userInfo}>
                <img src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/" />
                <a href="#">
                    <b>{user.fullname}</b>
                </a>
            </div>
            <p className={s.text}>{text}</p>
            <a href="#">
                <span className={s.postTitle}>{post.title}</span>
            </a>
        </div>
    );
};

export const RightSidebar = (): JSX.Element => {
    return (
        <div className={s.root}>
            <h3>
                Комментарии <ArrowRightIcon />
            </h3>
            {items.map((obj, idx) => (
                <CommentItem key={idx} {...obj} />
            ))}
        </div>
    );
};
