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
        <View className="flex-1 gap-1 flex-row">
            <View className="px-2 gap-2 items-center">
                {comment.tabcoins && (
                    <Text className="text-textMuted text-base font-family-regular">
                        {comment.tabcoins}
                    </Text>
                )}

                <View className="w-px flex-1 bg-border" />
            </View>
            <View className="gap-2 flex-1">
                {comment.body && comment.publishedAt && comment.owner_username && (

                    <View className="gap-2 flex-row items-center">
                        <Text className="font-family-regular text-sm bg-highlight text-textHighlight px-1 py-0.5 rounded">
                            {comment.owner_username}
                        </Text>

                        <Text className="text-textMuted font-family-regular text-sm">
                            {formatDistanceToNow(comment.publishedAt, { addSuffix: true, locale: ptBR })}
                        </Text>
                    </View>
                )}
                {!comment.body && (
                    <View className="p-2 border border-border rounded">
                        <Text className="text-textMuted font-family-regular text-base">Conteúdo excluído</Text>
                    </View>
                )}
                {comment.body && <MarkdownRender content={comment.body} />}

                {comment.children.map(childComment => (
                    <Comment comment={childComment} key={childComment.id} />
                ))}
            </View>
        </View>
    );

}


