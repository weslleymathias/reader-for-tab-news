import { Text, View } from "react-native";
import { MarkdownRender } from "./MarkdownRender";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { TContentResult } from "../services/tabnews/contents/comments/GetContentComments";

interface ICommentProps {
    comment: TContentResult
}

export const Comment = ({ comment }: ICommentProps) => {

    return (
        <View className="flex-1 px-1 pr-3 mb-2 gap-1 flex-row">
            <View className="px-2 gap-2 items-center">
                <Text className="text-textMuted text-base font-family-regular">
                    {comment.children_deep_count}
                </Text>

                <View className="w-px flex-1 bg-border" />
            </View>
            <View className="gap-2 flex-1">
                <View className="gap-2 flex-row items-center">
                    <Text className="font-family-regular text-sm bg-highlight text-textHighlight px-1 py-0.5 rounded">
                        {comment.owner_username}
                    </Text>
                    <Text className="text-textMuted font-family-regular text-sm">
                        {Math.ceil(comment.body.split(/\s+/).length / 200)} min de leitura
                    </Text>
                    <Text className="text-textMuted font-family-regular text-sm">
                        {formatDistanceToNow(comment.publishedAt, { addSuffix: true, locale: ptBR })}
                    </Text>
                </View>
                <MarkdownRender content={comment.body} />
            </View>
        </View>
    );

}


