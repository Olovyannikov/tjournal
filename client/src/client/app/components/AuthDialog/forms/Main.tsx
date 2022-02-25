import { Button } from '@material-ui/core';
import { MailOutline } from '@material-ui/icons';

import VK from '../img/vk.svg';
import Google from '../img/google.svg';
import Facebook from '../img/fb.svg';
import Twitter from '../img/twitter.svg';
import Apple from '../img/apple.svg';

import s from '../AuthDialog.module.scss';
import { FormsInterface } from './Forms.interface';

export const Main = ({ onClick }: FormsInterface): JSX.Element => {
    return (
        <>
            <Button onClick={onClick} variant='contained' fullWidth
                    className='mb-15'>
                <MailOutline />
                <span>Почта</span>
            </Button>
            <Button variant='contained' fullWidth className='mb-15'>
                <VK width={24} height={24} />
                <span>ВКонтакте</span>
            </Button>
            <Button variant='contained' fullWidth className='mb-15'>
                <Google width={24} height={24} />
                <span>Google</span>
            </Button>
            <div className={s.icons}>
                <Button variant='contained' className='mb-15'>
                    <Facebook width={24} height={24} />
                </Button>
                <Button variant='contained' className='mb-15'>
                    <Twitter width={24} height={24} />
                </Button>
                <Button variant='contained' className='mb-15'>
                    <Apple width={24} height={24} />
                </Button>
            </div>
        </>
    );
};
