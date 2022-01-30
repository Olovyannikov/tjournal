import { NextPage } from 'next';
import { MainLayout } from '@/layouts';
import { SettingsPage } from '@/public-app';

const Settings: NextPage = (): JSX.Element => {
    return (
        <MainLayout hideComments>
            <SettingsPage/>
        </MainLayout>
    );
};

export default Settings;
