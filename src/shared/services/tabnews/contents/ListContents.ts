import { parseISO } from "date-fns";
import { NewsListItem } from "../../../components/NewsListItem";
import { axiosInstance } from "../AxiosInstance";

export type TContentStatus = 'published';
export type TContentType = 'content';

export interface IContentItem {
    children_deep_count: number;
    created_at: string;
    deleted_at: string | null;
    id: string;
    owner_id: string;
    owner_username: string;
    parent_id: string | null;
    published_at: string;
    slug: string;
    source_url: string | null;
    status: TContentStatus;
    tabcoins: number;
    tabcoins_credit: number;
    tabcoins_debit: number;
    title: string;
    type: TContentType;
    updated_at: string;
}

export type TContentItemResult = Omit<IContentItem, 'created_at' | 'updated_at' | 'published_at' | 'deleted_at'> & {
    created_at: Date;
    updated_at: Date;
    published_at: Date;
    deleted_at: Date;
}

export type TContentList = TContentItemResult[];

export const listContents = async (): Promise<TContentList> => {

    const { data } = await axiosInstance.get<IContentItem>('/contents');

    return data.map(newsListItem => ({
        ...newsListItem,
        created_at: parseISO(newsListItem.created_at),
        updated_at: parseISO(newsListItem.updated_at),
        published_at: parseISO(newsListItem.published_at),
        deleted_at: newsListItem.deleted_at ? parseISO(newsListItem.deleted_at) : null,
    }));
}