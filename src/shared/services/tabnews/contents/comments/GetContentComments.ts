import { parseISO } from "date-fns";
import { axiosInstance } from "../../AxiosInstance";

export type TContentStatus = 'published' | 'draft' | 'deleted';
export type TContentType = 'content' | 'comment';

export interface IContent {
    id: string;
    slug: string | null;

    body: string | null;
    title: string | null;

    type: TContentType;
    status: TContentStatus | null;

    owner_id: string | null;
    owner_username: string | null;

    parent_id: string | null;

    source_url: string | null;

    created_at: string | null;
    updated_at: string | null;
    published_at: string | null;
    deleted_at: string | null;

    children: IContent[];
    children_deep_count: number;

    tabcoins: number | null;
    tabcoins_credit: number | null;
    tabcoins_debit: number | null;
}

export type TContentList = IContent[];

export type TContentResult = Omit<IContent, 'children' | 'created_at' | 'deleted_at' | 'published_at' | 'updated_at'> & {
    createdAt: Date | null;
    deletedAt: Date | null;
    publishedAt: Date | null;
    updatedAt: Date | null;
    children: TContentResult[];
}

const mapContent = (content: IContent): TContentResult => {
    return {
        ...content,
        createdAt: content.created_at ? parseISO(content.created_at) : null,
        updatedAt: content.updated_at ? parseISO(content.updated_at) : null,
        publishedAt: content.published_at ? parseISO(content.published_at) : null,
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