import { FC } from 'react';
import { createReactEditorJS } from 'react-editor-js';

export const Editor: FC = (): JSX.Element => {
    const ReactEditorJS = createReactEditorJS();

    const options = {
        placeholder: 'Введите текст вашей статьи'
    }

    return <ReactEditorJS {...options} />;
};
