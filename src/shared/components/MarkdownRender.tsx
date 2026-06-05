import { Platform, StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';

import { DarkTheme } from '../themes/DarkTheme';


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

export const styles = StyleSheet.create({
    // Body container
    body: {
        flex: 1,
    },

    // Headings
    heading1: {
        fontSize: 32,
        marginTop: 32 / 2,
        color: DarkTheme.colors.text,
        fontFamily: DarkTheme.fonts.families.bold,
    },
    heading2: {
        fontSize: 24,
        marginTop: 24 / 2,
        color: DarkTheme.colors.text,
        fontFamily: DarkTheme.fonts.families.bold,
    },
    heading3: {
        fontSize: 18,
        marginTop: 18 / 2,
        color: DarkTheme.colors.text,
        fontFamily: DarkTheme.fonts.families.bold,
    },
    heading4: {
        fontSize: 16,
        marginTop: 16 / 2,
        color: DarkTheme.colors.text,
        fontFamily: DarkTheme.fonts.families.bold,
    },
    heading5: {
        fontSize: 13,
        marginTop: 13 / 2,
        color: DarkTheme.colors.text,
        fontFamily: DarkTheme.fonts.families.bold,
    },
    heading6: {
        fontSize: 11,
        marginTop: 11 / 2,
        color: DarkTheme.colors.text,
        fontFamily: DarkTheme.fonts.families.bold,
    },

    // Horizontal Rule
    hr: {
        height: 1,
        marginVertical: 10,
        backgroundColor: DarkTheme.colors.border,
    },

    // Emphasis
    strong: {
        color: DarkTheme.colors.text,
        fontSize: DarkTheme.fonts.sizes.normal,
        fontFamily: DarkTheme.fonts.families.bold,
        marginTop: DarkTheme.fonts.sizes.normal / 2,
    },
    em: {
        fontStyle: 'italic',
        color: DarkTheme.colors.text,
        fontSize: DarkTheme.fonts.sizes.normal,
        marginTop: DarkTheme.fonts.sizes.normal / 2,
        fontFamily: DarkTheme.fonts.families.regular,
    },
    s: {
        color: DarkTheme.colors.text,
        textDecorationLine: 'line-through',
        fontSize: DarkTheme.fonts.sizes.normal,
        marginTop: DarkTheme.fonts.sizes.normal / 2,
        fontFamily: DarkTheme.fonts.families.regular,
    },

    // Blockquotes
    blockquote: {
        marginVertical: 8,
        borderLeftWidth: 4,
        paddingVertical: 0,
        paddingHorizontal: 8,
        borderColor: DarkTheme.colors.border,
        backgroundColor: DarkTheme.colors.paper,
    },

    // Lists
    bullet_list: {},
    ordered_list: {},
    list_item: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        color: DarkTheme.colors.text,
        fontFamily: DarkTheme.fonts.families.regular,
        marginBottom: DarkTheme.fonts.sizes.normal / 2,
    },
    bullet_list_icon: {
        marginHorizontal: 8,
        color: DarkTheme.colors.text,
        fontFamily: DarkTheme.fonts.families.regular,
    },
    bullet_list_content: {
        flex: 1,
        color: DarkTheme.colors.text,
        fontFamily: DarkTheme.fonts.families.regular,
    },
    ordered_list_icon: {
        marginHorizontal: 8,
        color: DarkTheme.colors.text,
        fontFamily: DarkTheme.fonts.families.regular,
    },
    ordered_list_content: {
        flex: 1,
        color: DarkTheme.colors.text,
        fontFamily: DarkTheme.fonts.families.regular,
    },

    // Code
    code_inline: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        color: DarkTheme.colors.text,
        borderColor: DarkTheme.colors.border,
        backgroundColor: DarkTheme.colors.paper,
        fontFamily: DarkTheme.fonts.families.regular,
        ...Platform.select({
            ios: { fontFamily: 'Courier' },
            android: { fontFamily: 'monospace' },
        }),
    },
    code_block: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        color: DarkTheme.colors.text,
        borderColor: DarkTheme.colors.border,
        backgroundColor: DarkTheme.colors.paper,
        fontFamily: DarkTheme.fonts.families.regular,
        ...Platform.select({
            ios: { fontFamily: 'Courier' },
            android: { fontFamily: 'monospace' },
        }),
    },
    fence: {
        padding: 8,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: DarkTheme.colors.border,
        backgroundColor: DarkTheme.colors.paper,
        fontFamily: DarkTheme.fonts.families.regular,
        color: DarkTheme.colors.text,
        ...Platform.select({
            ios: { fontFamily: 'Courier' },
            android: { fontFamily: 'monospace' },
        }),
    },

    // Tables
    table: {
        borderWidth: 1,
        borderRadius: 3,
        borderColor: DarkTheme.colors.border,
    },
    th: {
        flex: 1,
        padding: 4,
        color: DarkTheme.colors.text,
        fontFamily: DarkTheme.fonts.families.bold,
    },
    tr: {
        borderBottomWidth: 1,
        flexDirection: 'row',
        borderColor: DarkTheme.colors.border,
    },
    td: {
        flex: 1,
        padding: 4,
        color: DarkTheme.colors.text,
        fontSize: DarkTheme.fonts.sizes.normal,
        fontFamily: DarkTheme.fonts.families.regular,
    },

    // Links
    link: {
        textDecorationLine: 'underline',
        color: DarkTheme.colors.textHighlight,
        fontSize: DarkTheme.fonts.sizes.normal,
        fontFamily: DarkTheme.fonts.families.regular,
    },
    blocklink: {
        flex: 1,
        borderBottomWidth: 1,
        fontSize: DarkTheme.fonts.sizes.normal,
        borderColor: DarkTheme.colors.highlight,
    },

    // Images
    image: {
        flex: 1,
        resizeMode: 'contain',
    },

    // Text Output
    text: {
        color: DarkTheme.colors.text,
    },
    paragraph: {
        flexWrap: 'wrap',
        marginVertical: 8,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        fontSize: DarkTheme.fonts.sizes.normal,
        fontFamily: DarkTheme.fonts.families.regular,
    },
    hardbreak: {
        height: 1,
        width: '100%',
    },
    softbreak: {},
});
