export interface CommentItemProps {
    user: {
        id: number | string;
        fullName: string;
        avatarUrl: string;
    };
    text: string;
    post: {
        id: number | string;
        title: string;
    };
}
