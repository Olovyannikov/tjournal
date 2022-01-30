import { MainLayout } from '@/layouts';

import { WriteForm } from '@/components';

import s from './WritePage.module.scss';

export const WritePage = (): JSX.Element => {
    return (
        <MainLayout className={s.layout} hideComments hideMenu>
            <WriteForm />
        </MainLayout>
    );
};
