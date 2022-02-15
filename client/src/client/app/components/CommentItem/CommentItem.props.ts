export interface CommentItemProps {
    user: {
        fullName: string;
        avatarUrl: string;
    };
    text: string;
    post: {
        title: string;
    };
}
