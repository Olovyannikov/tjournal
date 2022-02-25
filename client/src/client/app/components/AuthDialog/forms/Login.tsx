import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { useForm, FormProvider } from 'react-hook-form';

import { LoginValidation } from '@/utils/schemas/login.validation';

import { Button } from '@material-ui/core';

import s from '../AuthDialog.module.scss';
import { FormsInterface } from './Forms.interface';
import { FormField } from '@/root/src/client/app/components/FormField/FormField';

export const Login = ({ onClick }: FormsInterface): JSX.Element => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(LoginValidation),
    });

    const onSubmit = (data: any) => console.log(data);

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField name='email' type='email' label='Почта' />
                <FormField name='password' type='password' label='Пароль' />
                <div className={s.controls}>
                    <Button disabled={!form.formState.isValid} type='submit' color='primary' variant='contained'>
                        Войти
                    </Button>
                    <Button type='button' color='primary' variant='text' onClick={onClick}>
                        Регистрация
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
