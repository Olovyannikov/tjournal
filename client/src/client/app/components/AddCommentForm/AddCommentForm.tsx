import { ChangeEvent, FormEvent, useRef, useState } from 'react';

import { Input, Button } from '@material-ui/core';

import s from './AddCommentForm.module.scss';

export const AddCommentForm = ({}): JSX.Element => {
    const [isClicked, setClicked] = useState<boolean>(false);
    const [text, setText] = useState<string>('');

    const addCommentHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (text) {
            setClicked(false);
            setText('');
        }
    };

    return (
        <form
            className={s.textfield}
            onSubmit={addCommentHandler}
        >
            <Input
                classes={{
                    root: s.fieldRoot,
                }}
                placeholder='Написать комментарий...'
                fullWidth
                multiline
                disableUnderline
                minRows={isClicked ? 5 : 1}
                value={text}
                onFocus={() => setClicked(true)}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
            />
            {isClicked &&
                <Button
                    type='submit'
                    color='primary'
                    variant='contained'
                    classes={{ root: s.btn }}
                >
                    Отправить
                </Button>
            }
        </form>
    );
};
