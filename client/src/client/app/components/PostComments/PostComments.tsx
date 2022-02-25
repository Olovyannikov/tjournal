import { useState } from 'react';

import { Container } from '@/UI';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';

import { Comment } from '../Comment/Comment';
import { AddCommentForm } from '../AddCommentForm/AddCommentForm';

import data from '@/root/data';

import { PostCommentsProps } from './PostComments.props';

export const PostComments = ({}: PostCommentsProps): JSX.Element => {
    const [tabStatus, setTabStatus] = useState<0 | 1>(0);
    const comments = data.comments[tabStatus ? 'latest' : 'popular'];

    return (
        <Paper elevation={0} className='mt-40 p-30'>
            <Container>
                <Typography variant='h6' className='mb-20'>
                    42 комментария
                </Typography>
                <Tabs
                    className='mt-20'
                    value={tabStatus}
                    indicatorColor='primary'
                    textColor='primary'
                    onChange={(_, newValue) => setTabStatus(newValue)}
                >
                    <Tab label='Популярные' />
                    <Tab label='По порядку' />
                </Tabs>
                <Divider />
                <AddCommentForm />
                <div className='mb-20' />
                {
                    comments.map(obj =>
                        <Comment
                            key={obj.id}
                            user={obj.user}
                            text={obj.text}
                            createdAt={obj.createdAt}
                        />,
                    )
                }
            </Container>
        </Paper>
    );
};
