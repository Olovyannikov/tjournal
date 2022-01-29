import { FC, useState } from 'react';

import { Button } from '@material-ui/core';

import CheckIcon from '@material-ui/icons/CheckOutlined';
import AddIcon from '@material-ui/icons/AddOutlined';

import s from './FollowButton.module.scss';

export const FollowButton: FC = (): JSX.Element => {
    const [followed, setFollowed] = useState(false);

    return (
        <Button
            onClick={() => setFollowed(!followed)}
            variant="contained"
            style={{ minWidth: 30, width: 35, height: 30 }}>
            {!followed ? <AddIcon /> : <CheckIcon style={{ fontSize: 20, color: '#2ea83a' }} />}
        </Button>
    );
};
