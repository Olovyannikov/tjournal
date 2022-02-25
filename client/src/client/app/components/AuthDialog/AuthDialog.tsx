import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    Divider,
    IconButton,
    TextField,
    Typography,
} from '@material-ui/core';

import VK from './img/vk.svg';
import Google from './img/google.svg';
import Facebook from './img/fb.svg';
import Twitter from './img/twitter.svg';
import Apple from './img/apple.svg';

import s from './AuthDialog.module.scss';
import { AuthDialogInterface, FormType } from './AuthDialog.interface';
import { ArrowBack, MailOutline } from '@material-ui/icons';
import App from 'next/app';
import { useState } from 'react';
import { Main } from '@/root/src/client/app/components/AuthDialog/forms/Main';
import { Login } from '@/root/src/client/app/components/AuthDialog/forms/Login';
import { Register } from '@/root/src/client/app/components/AuthDialog/forms/Register';

export const AuthDialog = ({ onClose, open }: AuthDialogInterface): JSX.Element => {
    const [formType, setFormType] = useState<FormType>('main');

    return (
        <Dialog fullWidth open={open} maxWidth='xs' onClose={onClose}>
            <DialogContent className={s.root}>
                <DialogContentText className={s.content}>
                    <Typography className={s.title}>
                        <>
                            {
                                formType === 'main' && 'Вход в TJ' ||
                                formType === 'login' && 'Войти через почту' ||
                                formType === 'register' && 'Зарегистрироваться'
                            }
                            {
                                formType !== 'main' && (
                                    <button type='button' className={s.back} onClick={() => setFormType('main')}>
                                        <ArrowBack />Назад
                                    </button>
                                )
                            }
                        </>
                    </Typography>

                    {formType === 'main' && <Main onClick={() => setFormType('login')} />}
                    {formType === 'login' && <Login onClick={() => setFormType('register')} />}
                    {formType === 'register' && <Register onClick={() => setFormType('login')} />}
                </DialogContentText>
            </DialogContent>
        </Dialog>
    );
};
