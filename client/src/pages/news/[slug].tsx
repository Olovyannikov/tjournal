import { Comment, FullPost } from '@/components';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';

import { MainLayout } from '@/layouts';

const NewsPost = (): JSX.Element => {
    return (
        <MainLayout contentFullWidth className='mb-50'>
            <FullPost />
            <Paper elevation={0} className='mt-40 p-30'>
                <Typography variant='h6' className='mb-20'>
                    42 комментария
                </Typography>
                <Tabs className='mt-20' value={0} indicatorColor='primary' textColor='primary'>
                    <Tab label='Популярные' />
                    <Tab label='По порядку' />
                </Tabs>
                <Divider />
                <div className='mb-20' />
                <Comment />
                <Comment />
                <Comment />
            </Paper>
        </MainLayout>
    );
};

export default NewsPost;
