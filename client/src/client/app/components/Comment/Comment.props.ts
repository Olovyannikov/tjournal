export interface CommentPostProps {
    user: {
        fullName: string;
        avatarUrl: string;
    };
    text?: string;
    createdAt: string;
}
