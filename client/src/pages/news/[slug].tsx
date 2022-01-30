import { MainLayout } from '@/layouts';
import { NewsItemsPage } from '@/public-app';

const NewsPost = (): JSX.Element => {
    return (
        <MainLayout contentFullWidth className='mb-50'>
            <NewsItemsPage/>
        </MainLayout>
    );
};

export default NewsPost;
