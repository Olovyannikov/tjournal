export type FormType = 'main' | 'register' | 'login'

export interface AuthDialogInterface {
    onClose(): void;
    open: boolean;
}
