import {
    ModeCommentOutlined as CommentsIcon,
    RepeatOutlined as RepostIcon,
    BookmarkBorderOutlined as FavoriteIcon,
    ShareOutlined as ShareIcon,
} from '@material-ui/icons';
import { ReactNode } from 'react';

export interface PostActionsDataInterface {
    key: string;
    item: ReactNode;
}

export const PostActionsData: PostActionsDataInterface[] = [
    { key: 'comments', item: <CommentsIcon /> },
    { key: 'repost', item: <RepostIcon /> },
    { key: 'favorite', item: <FavoriteIcon /> },
    { key: 'share', item: <ShareIcon /> },
];
