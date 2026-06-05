import { parseISO } from "date-fns";
import { axiosInstance } from "../AxiosInstance";

export interface IContent {
    body: string;
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
    status: 'published' | 'draft' | 'deleted';
    tabcoins: number;
    tabcoins_credit: number;
    tabcoins_debit: number;
    title: string;
    type: 'content';
    updated_at: string;
}

export type TContentResult = Omit<IContent, 'created_at' | 'deleted_at' | 'published_at' | 'updated_at'> & {
    created_at: Date;
    deleted_at: Date | null;
    published_at: Date;
    updated_at: Date;
}

interface IGetContentParams {
    user: string;
    slug: string;
}

export const getContent = async (params: IGetContentParams): Promise<TContentResult> => {

    const { data } = await axiosInstance.get(`/contents/${params.user}/${params.user}`);

    return {
        ...data,
        created_at: parseISO(data.created_at),
        updated_at: parseISO(data.updated_at),
        published_at: parseISO(data.published_at),
        deleted_at: data.deleted_at ? parseISO(data.deleted_at) : null,
    };
}