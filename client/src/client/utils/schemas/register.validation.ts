import * as yup from 'yup';
import { LoginValidation } from '@/utils/schemas/login.validation';

export const RegisterValidation = yup.object().shape({
    fullname: yup.string().required('Имя и фамилия должны быть')
}).concat(LoginValidation);
