import { FC } from 'react';

import { IconButton } from '@material-ui/core';

import { PostActionsData, PostActionsDataInterface } from './PostActions.data';

import s from './PostActions.module.scss';

export const PostActions: FC = (): JSX.Element => {
    return (
        <ul className={s.list}>
            {
                PostActionsData.map(({key, item}: PostActionsDataInterface): JSX.Element =>
                    <li key={key}>
                        <IconButton>
                            {item}
                        </IconButton>
                    </li>,
                )
            }
        </ul>
    );
};
