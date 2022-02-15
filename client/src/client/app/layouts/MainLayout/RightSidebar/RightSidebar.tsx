import clsx from 'clsx';
import { FC, useState } from 'react';

import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import items from '../../../../../../data';

import s from './RightSidebar.module.scss';
import { CommentItem } from '@/components';

export const RightSidebar: FC = (): JSX.Element => {
    const [isVisibleComments, setVisibleComments] = useState<boolean>(true);

    const onToggleVisibleHandler = () => {
        setVisibleComments(!isVisibleComments);
    };

    return (
        <aside className={clsx(s.root, !isVisibleComments && s.rotated)}>
            <button
                type='button'
                className={s.buttonText}
                onClick={onToggleVisibleHandler}
            >
                <b>Комментарии <ArrowRightIcon /></b>
            </button>
            {
                isVisibleComments &&
                items.comments.popular.map((obj) => (
                    <CommentItem key={obj.id} {...obj} />
                ))
            }
        </aside>
    );
};
