import { StyleSheet } from "react-native";
import Markdown from "react-native-markdown-display";
import { DarkTheme } from "../themes/DarkTheme";

interface IMarkdownRenderProps {
    content: string;
}

export const MarkdownRender = ({ content }: IMarkdownRenderProps) => {

    return (
        <Markdown style={styles}>
            {content}
        </Markdown>
    );
};

const styles = StyleSheet.create({
    heading1: {
        color: DarkTheme.colors.text,
    }
})