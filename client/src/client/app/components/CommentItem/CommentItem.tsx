import { FC } from 'react';

import Link from 'next/link';

import s from './CommentItem.module.scss';
import { CommentItemProps } from './CommentItem.props';

export const CommentItem: FC<CommentItemProps> = ({ user, text, post }: CommentItemProps): JSX.Element => {
    return (
        <div className={s.commentItem}>
            <div className={s.userInfo}>
                <img
                    src='https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/'
                    alt='User Avatar'
                />
                <Link href={`/profile/${user.id}`}>
                    <a>
                        <b>{user.fullName}</b>
                    </a>
                </Link>
            </div>
            <p className={s.text}>{text}</p>
            <Link href={`/news/${post.id}`}>
                <a>
                    <span className={s.postTitle}>{post.title}</span>
                </a>
            </Link>
        </div>
    );
};
