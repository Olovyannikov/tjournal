import { MainLayout } from '@/layouts';
import { SettingsIDPage } from '@/public-app';

const Profile = (): JSX.Element => {
    return (
        <MainLayout contentFullWidth hideComments>
            <SettingsIDPage />
        </MainLayout>
    );
};

export default Profile;
