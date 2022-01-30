import dynamic from 'next/dynamic';

import { Button, Input } from '@material-ui/core';

import s from './WriteForm.module.scss';
import { WriteFormProps } from './WriteForm.props';

const Editor = dynamic(
    () => import('../Editor/Editor').then((m) => m.Editor, e => null as never),
    { ssr: false },
);

export const WriteForm = ({ title }: WriteFormProps) => {
    return (
        <div>
            <Input
                classes={{ root: s.title }}
                placeholder='Заголовок'
                defaultValue={title}
            />
            <div className={s.editor}>
                <Editor />
            </div>
            <Button variant='contained' color='primary'>
                Опубликовать
            </Button>
        </div>
    );
};
