import { parseISO } from "date-fns";
import { axiosInstance } from "../../AxiosInstance";

export type TContentStatus = 'published' | 'draft' | 'deleted';
export type TContentType = 'content' | 'comment';

export interface IContent {
    id: string;
    slug: string;

    body: string;
    title: string | null;

    type: TContentType;
    status: TContentStatus;

    owner_id: string;
    owner_username: string;

    parent_id: string | null;

    source_url: string | null;

    created_at: string;
    updated_at: string;
    published_at: string;
    deleted_at: string | null;

    children: IContent[];
    children_deep_count: number;

    tabcoins: number;
    tabcoins_credit: number;
    tabcoins_debit: number;
}

export type TContentList = IContent[];

export type TContentResult = Omit<IContent, 'children' | 'created_at' | 'deleted_at' | 'published_at' | 'updated_at'> & {
    createdAt: Date;
    deletedAt: Date | null;
    publishedAt: Date;
    updatedAt: Date;
    children: TContentResult[];
}

const mapContent = (content: IContent): TContentResult => {
    return {
        ...content,
        createdAt: parseISO(content.created_at),
        updatedAt: parseISO(content.updated_at),
        publishedAt: parseISO(content.published_at),
        deletedAt: content.deleted_at ? parseISO(content.deleted_at) : null,
        children: content.children.map(childContent => mapContent(childContent)),
    }
}

interface IGetCommentsParams {
    user: string;
    slug: string;
}

export const getComments = async (params: IGetCommentsParams): Promise<TContentResult[]> => {

    const { data } = await axiosInstance.get<TContentList>(`/contents/${params.user}/${params.slug}/children`);

    return data.map(newsListItem => mapContent(newsListItem));
}