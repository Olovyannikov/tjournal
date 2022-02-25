import { Button } from '@material-ui/core';
import { FormProvider, useForm } from 'react-hook-form';

import s from '../AuthDialog.module.scss';
import { FormsInterface } from './Forms.interface';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { FormField } from '@/root/src/client/app/components/FormField/FormField';
import { RegisterValidation } from '@/utils/schemas/register.validation';

export const Register = ({ onClick }: FormsInterface): JSX.Element => {
    const form = useForm({
        mode: 'onChange',
        resolver: yupResolver(RegisterValidation),
    });

    const onSubmit = (data: any) => console.log(data);

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>

                <FormField name='fullname' type='text' label='Имя и фамилия' />
                <FormField name='email' type='text' label='Почта' />
                <FormField name='password' type='password' label='Пароль' />
                <div className={s.controls}>
                    <Button disabled={!form.formState.isValid} type='submit' color='primary' variant='contained'>
                        Регистрация
                    </Button>
                    <Button onClick={onClick} color='primary' variant='text'>
                        Войти
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
