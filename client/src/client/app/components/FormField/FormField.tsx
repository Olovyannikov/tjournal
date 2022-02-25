import { TextField } from '@material-ui/core';
import { useFormContext } from 'react-hook-form';

interface FormFieldProps {
    name: string;
    label: string;
    type: string;
}

export const FormField = ({name, label, type}: FormFieldProps): JSX.Element => {
    const { register, formState } = useFormContext();

    return (
        <TextField
            className='mb-20'
            size='small'
            label={label}
            variant='outlined'
            fullWidth
            required
            type={type}
            error={!!formState.errors[name]?.message}
            helperText={formState.errors[name]?.message}
            {...register(name)}
        />
    );
};
