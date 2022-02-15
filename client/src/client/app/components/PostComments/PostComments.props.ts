export type Comment = {
    text: string;
    id: number;
    createdAt: string;
    user: {
        fullName: string;
        avatarUrl: string;
    }
}

export interface PostCommentsProps {
    // items: Comment[];
}
