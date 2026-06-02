import { axiosInstance } from "../AxiosInstance";

export const listContents = async () => {

    const { data } = await axiosInstance.get('/contents');

    console.log(data);

    return [];
}