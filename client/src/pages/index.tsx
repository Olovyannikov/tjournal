import { NextPage } from 'next';
import { withLayout } from '@/layouts';
import { IndexPage } from '@/public-app';

const Index: NextPage = (): JSX.Element => <IndexPage />

export default withLayout(Index);
